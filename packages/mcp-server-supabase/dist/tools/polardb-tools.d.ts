import { Tool } from '@supabase/mcp-utils';
import { z } from 'zod';
import { S as SupabasePlatform } from '../types-CdbwumKR.js';

interface PolarDBToolsOptions {
    platform: SupabasePlatform;
    projectId?: string;
    readOnly?: boolean;
}
declare function getPolarDBTools({ platform, projectId, readOnly }: PolarDBToolsOptions): {
    list_tables: Tool<z.ZodObject<{
        schema: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        schema: string;
    }, {
        schema?: string | undefined;
    }>, unknown[]>;
    execute_sql: Tool<z.ZodObject<{
        query: z.ZodString;
        read_only: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        read_only: boolean;
    }, {
        query: string;
        read_only?: boolean | undefined;
    }>, {
        data: unknown[];
        rowCount: number;
        readOnly: boolean;
    }>;
    get_anon_key: Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, string>;
    get_project_url: Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, string>;
    list_storage_buckets: Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        public: boolean;
        name: string;
        id: string;
        owner: string;
        created_at: string;
        updated_at: string;
    }[]>;
    list_edge_functions: Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }[]>;
    get_edge_function: Tool<z.ZodObject<{
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
    }, {
        slug: string;
    }>, {
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }>;
    deploy_edge_function: Tool<z.ZodObject<{
        name: z.ZodString;
        entrypoint_path: z.ZodString;
        import_map_path: z.ZodOptional<z.ZodString>;
        files: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            content: string;
        }, {
            name: string;
            content: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        entrypoint_path: string;
        files: {
            name: string;
            content: string;
        }[];
        import_map_path?: string | undefined;
    }, {
        name: string;
        entrypoint_path: string;
        files: {
            name: string;
            content: string;
        }[];
        import_map_path?: string | undefined;
    }>, Omit<{
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }, "files">>;
    get_best_practices: Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        content: string;
        count: number;
        usage: string;
        error?: undefined;
        message?: undefined;
    } | {
        error: string;
        message: string;
        content?: undefined;
        count?: undefined;
        usage?: undefined;
    }>;
};

export { type PolarDBToolsOptions, getPolarDBTools };
