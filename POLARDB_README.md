# PolarDB Supabase MCP

PolarDB Supabase MCP，提供完整的数据库管理、Edge Functions 和存储功能。

## 🚀 功能特性

### ✅ PolarDB 模式支持的功能

#### 数据库操作
- `list_tables` - 列出数据库中的所有表
- `execute_sql` - 执行 SQL 查询（支持只读模式）

#### 项目信息
- `get_anon_key` - 获取项目的匿名密钥
- `get_project_url` - 获取项目 URL

#### 最佳实践
- `get_best_practices` - 获取 Supabase 开发最佳实践和提示词

#### 存储管理
- `list_storage_buckets` - 列出所有存储桶

#### Edge Functions 管理（需要 Dashboard 认证）
- `list_edge_functions` - 列出所有 Edge Functions
- `get_edge_function` - 获取特定 Edge Function 详情
- `deploy_edge_function` - 部署 Edge Function

### 🎯 Supabase 官方 AI Prompts 集成

本 MCP 服务器还集成了 Supabase 官方的 AI 提示词，通过 MCP 资源协议自动提供：

#### 可用的提示词资源
- **Next.js 认证设置** - Bootstrap Next.js app with Supabase Auth
- **Edge Functions 开发** - Writing Supabase Edge Functions  
- **数据库模式设计** - Database: Declarative Database Schema
- **RLS 策略创建** - Database: Create RLS policies
- **数据库函数开发** - Database: Create functions
- **数据库迁移管理** - Database: Create migration
- **PostgreSQL 风格指南** - Postgres SQL Style Guide
- **前端开发最佳实践** - Frontend Application Development Best Practices

## 🔧 配置方式

### 1. 快速开始

#### 环境准备

确保你的环境满足以下要求：

```bash
# Node.js 版本要求
node --version  # 需要 >= 18.x

# 包管理器
npm install -g pnpm  # 推荐使用 pnpm
```

#### 安装和构建

```bash
# 克隆项目
git clone <repository-url>
cd supabase-mcp

# 安装依赖
pnpm install

# 构建项目
pnpm build
```

### 2. MCP 服务器配置

#### Cursor 配置

创建或编辑 Cursor 的 MCP 配置文件：

```json
{
  "polardb-supabase": {
    "command": "node",
    "args": [
      "/path/to/supabase-mcp/packages/mcp-server-supabase/dist/transports/stdio.js",
      "--api-url", "https://your-project.supabase.co",
      "--service-role-key", "your-service-role-key",
      "--anon-key", "your-anon-key",
      "--project-ref", "your-project-id",
      "--dashboard-username", "your-dashboard-username",
      "--dashboard-password", "your-dashboard-password",
      "--read-only"
    ]
  }
}
```

### 3. 配置参数说明

#### PolarDB 模式参数

| 参数 | 环境变量 | 说明 | 必需 |
|------|----------|------|------|
| `--api-url` | `SUPABASE_API_URL` | Supabase 项目 API URL (如: https://xxx.supabase.co) | ✅ |
| `--service-role-key` | `SUPABASE_SERVICE_ROLE_KEY` | Supabase 服务角色密钥 | ✅ |
| `--anon-key` | `SUPABASE_ANON_KEY` | Supabase 匿名密钥 | ❌ |
| `--dashboard-username` | `SUPABASE_DASHBOARD_USERNAME` | Supabase Dashboard 用户名（用于 Edge Functions） | ❌ |
| `--dashboard-password` | `SUPABASE_DASHBOARD_PASSWORD` | Supabase Dashboard 密码（用于 Edge Functions） | ❌ |
| `--read-only` | - | 只读模式，防止写操作 | ❌ |



### 4. 获取配置信息

#### 从 Supabase Dashboard 获取

1. **API URL**: 在 Dashboard 的项目设置 → General → Configuration → API URL
2. **Service Role Key**: 在 Dashboard 的项目设置 → API → Project API keys → service_role 密钥
3. **Anon Key**: 在 Dashboard 的项目设置 → API → Project API keys → anon public 密钥
5. **Dashboard 用户名**: 在 Dashboard 的项目设置 → Database → Connection info → Username
6. **Dashboard 密码**: 在 Dashboard 的项目设置 → Database → Connection info → Password



### 5. 故障排除

#### 配置错误

```bash
# 错误: 缺少必需配置
❌ 配置验证失败: 缺少必需配置: apiUrl, serviceRoleKey

# 解决: 检查配置
1. 确认 apiUrl 和 serviceRoleKey 已设置
2. 确认配置文件格式正确
```

#### 网络连接错误

```bash
# 错误: 网络连接失败
❌ execute_sql 失败: fetch failed

# 解决: 检查网络
1. 确认 API URL 可访问
2. 检查防火墙设置
3. 验证网络连接
```

#### 认证错误

```bash
# 错误: 认证失败
❌ list_edge_functions 失败: 401 Unauthorized

# 解决: 检查认证
1. 确认 serviceRoleKey 正确
2. 检查 Dashboard 用户名密码
3. 验证权限设置
```

## 📝 使用示例

### 1. 数据库操作工具

#### `list_tables` - 列出数据库表

```typescript
// 列出 public schema 中的所有表
const result = await client.callTool({
  name: 'polardb-supabase_list_tables',
  arguments: {
    schema: 'public'  // 可选，默认为 'public'
  }
});

// 返回值示例
{
  "tables": [
    {
      "name": "users",
      "schema": "public",
      "type": "table"
    },
    {
      "name": "posts",
      "schema": "public", 
      "type": "table"
    }
  ]
}

// 列出其他 schema 的表
const result = await client.callTool({
  name: 'polardb-supabase_list_tables',
  arguments: {
    schema: 'auth'  // 列出 auth schema 的表
  }
});
```

#### `execute_sql` - 执行 SQL 查询

```typescript
// 执行只读查询
const result = await client.callTool({
  name: 'polardb-supabase_execute_sql',
  arguments: {
    query: 'SELECT * FROM users WHERE active = true LIMIT 10',
    read_only: true  // 可选，默认为 true
  }
});

// 返回值示例
{
  "data": [
    {
      "id": 1,
      "email": "user1@example.com",
      "active": true,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "count": 1
}

// 执行写入操作（需要关闭只读模式）
const result = await client.callTool({
  name: 'polardb-supabase_execute_sql',
  arguments: {
    query: 'INSERT INTO users (email, name) VALUES ($1, $2)',
    read_only: false,
    params: ['newuser@example.com', 'New User']
  }
});

// 复杂查询示例
const result = await client.callTool({
  name: 'polardb-supabase_execute_sql',
  arguments: {
    query: `
      SELECT 
        u.name,
        COUNT(p.id) as post_count,
        AVG(p.rating) as avg_rating
      FROM users u
      LEFT JOIN posts p ON u.id = p.user_id
      WHERE u.created_at > $1
      GROUP BY u.id, u.name
      HAVING COUNT(p.id) > 0
      ORDER BY avg_rating DESC
    `,
    params: ['2024-01-01'],
    read_only: true
  }
});
```

### 2. 项目信息工具

#### `get_anon_key` - 获取匿名密钥

```typescript
// 获取项目的匿名密钥
const result = await client.callTool({
  name: 'polardb-supabase_get_anon_key',
  arguments: {}
});

// 返回值示例
{
  "anon_key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZmF1bHQiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTczNDc0OTY0NSwiZXhwIjoyMDUwMzI1NjQ1fQ.example"
}
```

#### `get_project_url` - 获取项目 URL

```typescript
// 获取项目 URL
const result = await client.callTool({
  name: 'polardb-supabase_get_project_url',
  arguments: {}
});

// 返回值示例
{
  "project_url": "http://8.145.192.124:8080"
}
```

### 3. 最佳实践工具

#### `get_best_practices` - 获取开发最佳实践

```typescript
// 获取所有 Supabase 最佳实践
const result = await client.callTool({
  name: 'polardb-supabase_get_best_practices',
  arguments: {}
});

// 返回值示例
{
  "content": "# Supabase Development Best Practices\n\n> Total practices: 8\n\n## Bootstrap Next.js app with Supabase Auth\n\n**Create a Next.js app with Supabase authentication using TypeScript**\n\n## Writing Supabase Edge Functions\n\n**Guidelines for developing Supabase Edge Functions**\n\n...",
  "count": 8,
  "usage": "Copy the content above and paste it into .cursor/rules or .qoder/rules"
}
```

### 4. 存储管理工具

#### `list_storage_buckets` - 列出存储桶

```typescript
// 列出所有存储桶
const result = await client.callTool({
  name: 'polardb-supabase_list_storage_buckets',
  arguments: {}
});

// 返回值示例
{
  "buckets": [
    {
      "id": "avatars",
      "name": "avatars",
      "owner": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z",
      "public": false
    },
    {
      "id": "public",
      "name": "public",
      "owner": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z",
      "public": true
    }
  ]
}
```

### 5. Edge Functions 管理工具

#### `list_edge_functions` - 列出 Edge Functions

```typescript
// 列出所有 Edge Functions
const result = await client.callTool({
  name: 'polardb-supabase_list_edge_functions',
  arguments: {}
});

// 返回值示例
{
  "functions": [
    {
      "id": "rapid-action",
      "name": "rapid-action",
      "slug": "rapid-action",
      "version": "1.0.0",
      "status": "ACTIVE",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    },
    {
      "id": "hello-world",
      "name": "hello-world", 
      "slug": "hello-world",
      "version": "1.0.0",
      "status": "ACTIVE",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### `get_edge_function` - 获取 Edge Function 详情

```typescript
// 获取特定 Edge Function 的详细信息
const result = await client.callTool({
  name: 'polardb-supabase_get_edge_function',
  arguments: {
    function_name: 'rapid-action'
  }
});

// 返回值示例
{
  "function": {
    "id": "rapid-action",
    "name": "rapid-action",
    "slug": "rapid-action",
    "version": "1.0.0",
    "status": "ACTIVE",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z",
    "import_map": {
      "imports": {
        "@supabase/supabase-js": "https://esm.sh/@supabase/supabase-js@2"
      }
    },
    "verify_jwt": true
  }
}
```

#### `deploy_edge_function` - 部署 Edge Function

```typescript
// 部署 Edge Function
const result = await client.callTool({
  name: 'polardb-supabase_deploy_edge_function',
  arguments: {
    function_name: 'hello-world',
    code: `
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: \`Hello \${name}!\`,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
    `,
    import_map: {
      imports: {
        "@supabase/supabase-js": "https://esm.sh/@supabase/supabase-js@2"
      }
    },
    verify_jwt: true
  }
});

// 返回值示例
{
  "success": true,
  "message": "Function 'hello-world' deployed successfully",
  "function": {
    "id": "hello-world",
    "name": "hello-world",
    "slug": "hello-world",
    "version": "1.0.1",
    "status": "ACTIVE",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-02T00:00:00Z"
  }
}

// 简单部署（使用默认配置）
const result = await client.callTool({
  name: 'polardb-supabase_deploy_edge_function',
  arguments: {
    function_name: 'simple-function',
    code: `
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  return new Response(
    JSON.stringify({ message: "Hello from Edge Function!" }),
    { headers: { "Content-Type": "application/json" } }
  )
})
    `
  }
});
```

