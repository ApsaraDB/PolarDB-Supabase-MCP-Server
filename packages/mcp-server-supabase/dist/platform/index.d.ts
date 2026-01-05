import { S as SupabasePlatform, E as ExecuteSqlOptions, G as GenerateTypescriptTypesResult, a as StorageBucket, b as EdgeFunction, D as DeployEdgeFunctionOptions, c as Secret, C as CreateSecretsOptions, M as Migration, A as ApplyMigrationOptions, O as Organization, P as Project, d as CreateProjectOptions, e as CreateBranchOptions, R as ResetBranchOptions, f as StorageConfig } from '../types-BGR5CTgA.js';
export { B as Branch, z as CreateSecretOptions, y as GetLogsOptions, L as ListMigrationsResult, n as applyMigrationOptionsSchema, h as branchSchema, k as createBranchOptionsSchema, j as createProjectOptionsSchema, w as createSecretOptionsSchema, x as createSecretsOptionsSchema, l as deployEdgeFunctionOptionsSchema, i as edgeFunctionSchema, m as executeSqlOptionsSchema, u as generateTypescriptTypesResultSchema, t as getLogsOptionsSchema, q as migrationSchema, o as organizationSchema, p as projectSchema, r as resetBranchOptionsSchema, v as secretSchema, s as storageBucketSchema, g as storageConfigSchema } from '../types-BGR5CTgA.js';
import { InitData } from '@supabase/mcp-utils';
import 'zod';

interface PolarDBPlatformOptions {
    apiUrl: string;
    anonKey: string;
    serviceRoleKey: string;
    dashboardUsername?: string;
    dashboardPassword?: string;
}
declare class PolarDBPlatform implements SupabasePlatform {
    readonly platformType: "polardb";
    private apiUrl;
    private serviceKey;
    private anonKey;
    private dashboardUsername?;
    private dashboardPassword?;
    constructor(options: PolarDBPlatformOptions);
    init(info: InitData): Promise<void>;
    executeSql<T>(projectId: string, options: ExecuteSqlOptions): Promise<T[]>;
    getProjectUrl(projectId: string): Promise<string>;
    getAnonKey(projectId: string): Promise<string>;
    generateTypescriptTypes(projectId: string): Promise<GenerateTypescriptTypesResult>;
    listAllBuckets(projectId: string): Promise<StorageBucket[]>;
    listEdgeFunctions(projectId: string): Promise<EdgeFunction[]>;
    getEdgeFunction(projectId: string, functionSlug: string): Promise<EdgeFunction>;
    deployEdgeFunction(projectId: string, options: DeployEdgeFunctionOptions): Promise<Omit<EdgeFunction, 'files'>>;
    listSecrets(projectId: string): Promise<Secret[]>;
    createSecrets(projectId: string, secrets: CreateSecretsOptions): Promise<Secret[]>;
    deleteSecrets(projectId: string, secretNames: string[]): Promise<void>;
    listMigrations(projectId: string): Promise<Migration[]>;
    applyMigration(projectId: string, options: ApplyMigrationOptions): Promise<void>;
    listOrganizations(): Promise<Pick<Organization, 'id' | 'name'>[]>;
    getOrganization(organizationId: string): Promise<Organization>;
    listProjects(): Promise<Project[]>;
    getProject(projectId: string): Promise<Project>;
    createProject(options: CreateProjectOptions): Promise<Project>;
    pauseProject(projectId: string): Promise<void>;
    restoreProject(projectId: string): Promise<void>;
    listBranches(projectId: string): Promise<any[]>;
    createBranch(projectId: string, options: CreateBranchOptions): Promise<any>;
    deleteBranch(branchId: string): Promise<void>;
    mergeBranch(branchId: string): Promise<void>;
    resetBranch(branchId: string, options: ResetBranchOptions): Promise<void>;
    rebaseBranch(branchId: string): Promise<void>;
    getStorageConfig(projectId: string): Promise<StorageConfig>;
    updateStorageConfig(projectId: string, config: StorageConfig): Promise<void>;
    getLogs(projectId: string, options: any): Promise<unknown>;
    getSecurityAdvisors(projectId: string): Promise<unknown>;
    getPerformanceAdvisors(projectId: string): Promise<unknown>;
}

export { ApplyMigrationOptions, CreateBranchOptions, CreateProjectOptions, CreateSecretsOptions, DeployEdgeFunctionOptions, EdgeFunction, ExecuteSqlOptions, GenerateTypescriptTypesResult, Migration, Organization, PolarDBPlatform, type PolarDBPlatformOptions, Project, ResetBranchOptions, Secret, StorageBucket, StorageConfig, SupabasePlatform };
