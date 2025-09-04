// 直接在此文件中导入所有 Markdown，并定义提示词元数据
import authNextjs from './prompts/auth-nextjs.md';
import databaseFunctions from './prompts/database-functions.md';
import databaseSchema from './prompts/database-schema.md';
import edgeFunctions from './prompts/edge-functions.md';
import frontendBestPractices from './prompts/frontend-best-practices.md';
import migrations from './prompts/migrations.md';
import postgresStyle from './prompts/postgres-style.md';
import rlsPolicies from './prompts/rls-policies.md';

export interface PromptEntry {
  id: string;
  name: string;
  description: string;
  content: string;
}

const entries: PromptEntry[] = [
  {
    id: 'auth-nextjs',
    name: 'Bootstrap Next.js app with Supabase Auth',
    description: 'Official prompt for setting up Supabase Auth in Next.js',
    content: authNextjs,
  },
  {
    id: 'database-functions',
    name: 'Database: Create functions',
    description: 'Official prompt for database functions',
    content: databaseFunctions,
  },
  {
    id: 'database-schema',
    name: 'Database: Declarative Database Schema',
    description: 'Official prompt for database schema design',
    content: databaseSchema,
  },
  {
    id: 'edge-functions',
    name: 'Writing Supabase Edge Functions',
    description: 'Official prompt for developing Edge Functions',
    content: edgeFunctions,
  },
  {
    id: 'frontend-best-practices',
    name: 'Frontend Application Development Best Practices',
    description: 'Comprehensive guide for frontend development best practices',
    content: frontendBestPractices,
  },
  {
    id: 'migrations',
    name: 'Database: Create migration',
    description: 'Official prompt for database migrations',
    content: migrations,
  },
  {
    id: 'postgres-style',
    name: 'Postgres SQL Style Guide',
    description: 'Official PostgreSQL SQL style guide',
    content: postgresStyle,
  },
  {
    id: 'rls-policies',
    name: 'Database: Create RLS policies',
    description: 'Official prompt for Row Level Security policies',
    content: rlsPolicies,
  },
];

export interface LoadedPrompt {
  name: string;
  description: string;
  content: string;
}

export class PromptsProvider {

  /**
   * 加载所有提示词文件
   */
  async getAllPrompts(): Promise<LoadedPrompt[]> {
    return entries.map(this.fromEntry);
  }


  /**
   * 根据文件名和内容生成资源对象
   */
  private fromEntry = (entry: PromptEntry): LoadedPrompt => ({
    name: entry.name,
    description: entry.description,
    content: entry.content,
  });
}

// 导出单例实例
export const promptsProvider = new PromptsProvider();
