import type { InitData } from '@supabase/mcp-utils';
import type { 
  SupabasePlatform, 
  ExecuteSqlOptions, 
  Migration, 
  ApplyMigrationOptions, 
  Organization,
  Project,
  EdgeFunction,
  DeployEdgeFunctionOptions,
  CreateProjectOptions,
  CreateBranchOptions,
  ResetBranchOptions,
  StorageConfig,
  StorageBucket,
  GenerateTypescriptTypesResult
} from './types.js';

export interface PolarDBPlatformOptions {
  apiUrl: string;           // Supabase API 端点
  anonKey: string;          // 匿名 API Key
  serviceRoleKey: string;   // 服务端 API Key
  dashboardUsername?: string;  // Dashboard Basic 认证用户名
  dashboardPassword?: string;  // Dashboard Basic 认证密码
}

export class PolarDBPlatform implements SupabasePlatform {
  readonly platformType = 'polardb' as const;
  
  private apiUrl: string;
  private serviceKey: string;
  private anonKey: string;
  private dashboardUsername?: string;
  private dashboardPassword?: string;

  constructor(options: PolarDBPlatformOptions) {
    this.apiUrl = options.apiUrl;
    this.serviceKey = options.serviceRoleKey;
    this.anonKey = options.anonKey;
    this.dashboardUsername = options.dashboardUsername;
    this.dashboardPassword = options.dashboardPassword;
  }

  // ========================================
  // 已实现的核心功能
  // ========================================

  async init(info: InitData) {
    // 验证连接
    try {
      await this.executeSql('test', { query: 'SELECT 1', read_only: true });
    } catch (error) {
      throw new Error(`Failed to connect to PolarDB: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // 核心功能：执行 SQL
  async executeSql<T>(projectId: string, options: ExecuteSqlOptions): Promise<T[]> {
    const response = await fetch(`${this.apiUrl}/pg/query`, {
      method: 'POST',
      headers: {
        'apikey': this.serviceKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: options.query,
        read_only: options.read_only
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`SQL execution failed: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    // 兼容不同的响应格式
    if (Array.isArray(result)) {
      return result;
    } else if (result.data && Array.isArray(result.data)) {
      return result.data;
    } else {
      return [];
    }
  }

  // 项目信息相关
  async getProjectUrl(projectId: string): Promise<string> { 
    return this.apiUrl;
  }
  
  async getAnonKey(projectId: string): Promise<string> { 
    return this.anonKey;
  }

  // 类型生成
  async generateTypescriptTypes(projectId: string): Promise<GenerateTypescriptTypesResult> {
    try {
      // 检查是否有 Dashboard 认证信息
      if (!this.dashboardUsername || !this.dashboardPassword) {
        throw new Error('需要先设置用户名和密码');
      }
      
      // 使用 Basic 认证调用 Supabase Studio 接口
      const basicAuth = Buffer.from(`${this.dashboardUsername}:${this.dashboardPassword}`).toString('base64');
      
      const response = await fetch(`${this.apiUrl}/api/v1/projects/${projectId}/types/typescript`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate TypeScript types: ${response.status} ${errorText}`);
      }
      
      const result = await response.json();
      
      // 如果接口返回的是字符串，直接使用
      if (typeof result === 'string') {
        return { types: result };
      }
      
      // 如果接口返回的是对象，尝试提取 types 字段
      if (result && typeof result === 'object' && result.types) {
        return { types: result.types };
      }
      
      // 如果都不匹配，返回原始结果
      return { types: JSON.stringify(result) };
    } catch (error) {
      throw new Error(`Failed to generate TypeScript types: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // 存储相关
  async listAllBuckets(projectId: string): Promise<StorageBucket[]> { 
    // 通过 SQL 查询获取存储桶信息
    try {
      const buckets = await this.executeSql(projectId, {
        query: `
          SELECT 
            schemaname as name,
            'public' as public,
            'active' as status,
            'storage' as type
          FROM pg_catalog.pg_tables 
          WHERE schemaname IN ('storage', 'public')
          ORDER BY schemaname
        `,
        read_only: true
      });
      
      return buckets.map((bucket: any) => ({
        id: bucket.name,
        name: bucket.name,
        public: bucket.public === 'public',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        owner: 'polardb'
      }));
    } catch (error) {
      // 如果查询失败，返回空数组
      return [];
    }
  }

  // Edge Functions 相关
  async listEdgeFunctions(projectId: string): Promise<EdgeFunction[]> { 
    if (!this.dashboardUsername || !this.dashboardPassword) {
      throw new Error('Edge Functions 相关功能需要先设置用户名和密码');
    }
    
    try {
      // 使用 Basic 认证，这是 Supabase Studio 使用的认证方式
      const basicAuth = Buffer.from(`${this.dashboardUsername}:${this.dashboardPassword}`).toString('base64');
      
      const response = await fetch(`${this.apiUrl}/api/v1/projects/default/functions`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch Edge Functions: ${response.status} ${errorText}`);
      }
      
      const functions = await response.json();
      
      // 转换为 EdgeFunction 格式
      return functions.map((func: any) => ({
        id: func.id || func.slug,
        slug: func.slug,
        name: func.name || func.slug,
        status: func.status || 'active',
        version: func.version || 1,
        created_at: func.created_at || Date.now(),
        updated_at: func.updated_at || Date.now(),
        verify_jwt: func.verify_jwt || false,
        import_map: func.import_map || false,
        import_map_path: func.import_map_path,
        entrypoint_path: func.entrypoint_path,
        files: func.files || []
      }));
    } catch (error) {
      // 如果接口不存在或失败，返回空数组
      console.warn(`Edge Functions API not available: ${error instanceof Error ? error.message : String(error)}`);
      return [];
    }
  }
  
  async getEdgeFunction(projectId: string, functionSlug: string): Promise<EdgeFunction> { 
    if (!this.dashboardUsername || !this.dashboardPassword) {
      throw new Error('Edge Functions 相关功能需要先设置用户名和密码');
    }
    
    try {
      // 使用 Basic 认证，这是 Supabase Studio 使用的认证方式
      const basicAuth = Buffer.from(`${this.dashboardUsername}:${this.dashboardPassword}`).toString('base64');
      
      const response = await fetch(`${this.apiUrl}/api/v1/projects/default/functions/${functionSlug}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch Edge Function: ${response.status} ${errorText}`);
      }
      
      const func = await response.json();
      
      return {
        id: func.id || func.slug,
        slug: func.slug,
        name: func.name || func.slug,
        status: func.status || 'active',
        version: func.version || 1,
        created_at: func.created_at || Date.now(),
        updated_at: func.updated_at || Date.now(),
        verify_jwt: func.verify_jwt || false,
        import_map: func.import_map || false,
        import_map_path: func.import_map_path,
        entrypoint_path: func.entrypoint_path,
        files: func.files || []
      };
    } catch (error) {
      throw new Error(`Failed to get Edge Function: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  
  async deployEdgeFunction(projectId: string, options: DeployEdgeFunctionOptions): Promise<Omit<EdgeFunction, 'files'>> { 
    if (!this.dashboardUsername || !this.dashboardPassword) {
      throw new Error('Edge Functions 相关功能需要先设置用户名和密码');
    }
    
    try {
      const { name, entrypoint_path, import_map_path, files } = options;
      
      // 创建 FormData
      const formData = new FormData();
      
      // 添加元数据
      const metadata = {
        name,
        entrypoint_path,
        import_map_path
      };
      formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      
      // 添加文件
      files.forEach((file) => {
        formData.append('file', new Blob([file.content], { type: 'application/typescript' }), file.name);
      });
      
      // 使用 Basic 认证，这是 Supabase Studio 使用的认证方式
      const basicAuth = Buffer.from(`${this.dashboardUsername}:${this.dashboardPassword}`).toString('base64');
      
      const response = await fetch(`${this.apiUrl}/api/v1/projects/default/functions/deploy?slug=${name}`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`
        },
        body: formData
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to deploy Edge Function: ${response.status} ${errorText}`);
      }
      
      const result = await response.json();
      
      return {
        id: result.id || name,
        slug: name,
        name,
        status: result.status || 'active',
        version: result.version || 1,
        created_at: result.created_at || Date.now(),
        updated_at: result.updated_at || Date.now(),
        verify_jwt: result.verify_jwt || false,
        import_map: result.import_map || false,
        import_map_path,
        entrypoint_path
      };
    } catch (error) {
      throw new Error(`Failed to deploy Edge Function: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // ========================================
  // 不支持的功能（PolarDB 模式不支持）
  // ========================================

  // 迁移相关
  async listMigrations(projectId: string): Promise<Migration[]> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async applyMigration(projectId: string, options: ApplyMigrationOptions): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  // 组织管理
  async listOrganizations(): Promise<Pick<Organization, 'id' | 'name'>[]> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async getOrganization(organizationId: string): Promise<Organization> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  // 项目管理
  async listProjects(): Promise<Project[]> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async getProject(projectId: string): Promise<Project> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async createProject(options: CreateProjectOptions): Promise<Project> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async pauseProject(projectId: string): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async restoreProject(projectId: string): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  // 分支管理
  async listBranches(projectId: string): Promise<any[]> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async createBranch(projectId: string, options: CreateBranchOptions): Promise<any> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async deleteBranch(branchId: string): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async mergeBranch(branchId: string): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async resetBranch(branchId: string, options: ResetBranchOptions): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async rebaseBranch(branchId: string): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  // 存储配置
  async getStorageConfig(projectId: string): Promise<StorageConfig> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async updateStorageConfig(projectId: string, config: StorageConfig): Promise<void> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  // 日志和监控
  async getLogs(projectId: string, options: any): Promise<unknown> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async getSecurityAdvisors(projectId: string): Promise<unknown> { 
    throw new Error('Not available in PolarDB mode'); 
  }
  
  async getPerformanceAdvisors(projectId: string): Promise<unknown> { 
    throw new Error('Not available in PolarDB mode'); 
  }
}
