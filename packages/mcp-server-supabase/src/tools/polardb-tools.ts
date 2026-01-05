import { tool, type Tool } from '@supabase/mcp-utils';
import { z } from 'zod';
import type { SupabasePlatform } from '../platform/types.js';
import { promptsProvider } from '../prompts-loader.js';

export interface PolarDBToolsOptions {
  platform: SupabasePlatform;
  projectId?: string;
  readOnly?: boolean;
}

export function getPolarDBTools({ platform, projectId, readOnly }: PolarDBToolsOptions) {
  return {
    list_tables: tool({
      description: "List all tables in the database",
      parameters: z.object({
        schema: z.string().optional().default('public')
      }),
      async execute({ schema }) {
        const query = `
          SELECT 
            table_name,
            table_type,
            table_schema
          FROM information_schema.tables 
          WHERE table_schema = '${schema}'
          ORDER BY table_name
        `;
        
        const result = await platform.executeSql(projectId || 'default', {
          query,
          read_only: true
        });
        
        return result;
      }
    }),

    execute_sql: tool({
      description: "Execute SQL query against the database",
      parameters: z.object({
        query: z.string().describe("SQL query to execute"),
        read_only: z.boolean().optional().default(true).describe("Whether the query is read-only")
      }),
      async execute({ query, read_only }) {
        if (readOnly && !read_only) {
          throw new Error('Server is configured in read-only mode. Cannot execute write operations.');
        }
        
        const finalReadOnly = readOnly ? true : read_only;
        
        const result = await platform.executeSql(projectId || 'default', {
          query,
          read_only: finalReadOnly
        });
        
        return {
          data: result,
          rowCount: Array.isArray(result) ? result.length : 0,
          readOnly: finalReadOnly
        };
      }
    }),

    get_anon_key: tool({
      description: "Get the anonymous key for the project",
      parameters: z.object({}),
      async execute() {
        return await platform.getAnonKey(projectId || 'default');
      }
    }),

    get_project_url: tool({
      description: "Get the project URL",
      parameters: z.object({}),
      async execute() {
        return await platform.getProjectUrl(projectId || 'default');
      }
    }),

    list_storage_buckets: tool({
      description: "List all storage buckets",
      parameters: z.object({}),
      async execute() {
        return await platform.listAllBuckets(projectId || 'default');
      }
    }),

    list_edge_functions: tool({
      description: "List all Edge Functions in the project",
      parameters: z.object({}),
      async execute() {
        return await platform.listEdgeFunctions(projectId || 'default');
      }
    }),

    get_edge_function: tool({
      description: "Get a specific Edge Function by slug",
      parameters: z.object({
        slug: z.string().describe("The slug of the Edge Function")
      }),
      async execute({ slug }) {
        return await platform.getEdgeFunction(projectId || 'default', slug);
      }
    }),

    deploy_edge_function: tool({
      description: "Deploy an Edge Function",
      parameters: z.object({
        name: z.string().describe("The name/slug of the Edge Function"),
        entrypoint_path: z.string().describe("The entrypoint path for the function"),
        import_map_path: z.string().optional().describe("The import map path (optional)"),
        files: z.array(z.object({
          name: z.string().describe("The filename"),
          content: z.string().describe("The file content")
        })).describe("Array of files to deploy")
      }),
      async execute({ name, entrypoint_path, import_map_path, files }) {
        if (readOnly) {
          throw new Error('Cannot deploy Edge Functions in read-only mode');
        }
        
        return await platform.deployEdgeFunction(projectId || 'default', {
          name,
          entrypoint_path,
          import_map_path,
          files
        });
      }
    }),

    list_edge_function_secrets: tool({
      description: "List all Edge Function secrets in the project",
      parameters: z.object({}),
      async execute() {
        return await platform.listSecrets(projectId || 'default');
      }
    }),

    create_edge_function_secrets: tool({
      description: "Create or update Edge Function secrets. Secrets are encrypted and stored securely.",
      parameters: z.object({
        secrets: z.array(z.object({
          name: z.string().describe("The name of the secret"),
          value: z.string().describe("The value of the secret (will be encrypted)")
        })).describe("Array of secrets to create or update")
      }),
      async execute({ secrets }) {
        if (readOnly) {
          throw new Error('Cannot create secrets in read-only mode');
        }
        
        return await platform.createSecrets(projectId || 'default', secrets);
      }
    }),

    delete_edge_function_secrets: tool({
      description: "Delete Edge Function secrets from the project",
      parameters: z.object({
        secret_names: z.array(z.string()).describe("Array of secret names to delete")
      }),
      async execute({ secret_names }) {
        if (readOnly) {
          throw new Error('Cannot delete secrets in read-only mode');
        }
        
        await platform.deleteSecrets(projectId || 'default', secret_names);
        return { success: true, message: 'Secrets deleted successfully' };
      }
    }),

    get_best_practices: tool({
      description: "Get Supabase development best practices and prompts for use in IDE rules configuration",
      parameters: z.object({}),
      async execute() {
        try {
          const prompts = await promptsProvider.getAllPrompts();
          
          // 生成 markdown 内容
          const content = [
            `# Supabase Development Best Practices`,
            ``,
            `> Total practices: ${prompts.length}`,
            ``,
            ...prompts.map(prompt => [
              `## ${prompt.name}`,
              ``,
              prompt.description ? `**${prompt.description}**` : '',
              ``,
              prompt.content,
              ``,
              `---`,
              ``
            ].filter(Boolean).join('\n'))
          ].join('\n');
          
          return {
            content,
            count: prompts.length,
            usage: "Copy the content above and paste it into .cursor/rules or .qoder/rules"
          };
        } catch (error) {
          return {
            error: 'Failed to get best practices',
            message: error instanceof Error ? error.message : String(error)
          };
        }
      }
    }),
  };
}
