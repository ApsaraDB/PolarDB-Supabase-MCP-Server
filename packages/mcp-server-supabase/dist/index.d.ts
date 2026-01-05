import { S as SupabasePlatform } from './types-BGR5CTgA.js';
export { FeatureGroup, SupabaseMcpServerOptions, SupabasePlatformOptions, createSupabaseMcpServer } from './server.js';
export { PolarDBToolsOptions, getPolarDBTools } from './tools/polardb-tools.js';
import '@supabase/mcp-utils';
import 'zod';
import '@modelcontextprotocol/sdk/server';

type SupabaseApiPlatformOptions = {
    /**
     * The access token for the Supabase Management API.
     */
    accessToken: string;
    /**
     * The API URL for the Supabase Management API.
     */
    apiUrl?: string;
};
/**
 * Creates a Supabase platform implementation using the Supabase Management API.
 */
declare function createSupabaseApiPlatform(options: SupabaseApiPlatformOptions): SupabasePlatform;

export { type SupabaseApiPlatformOptions, SupabasePlatform, createSupabaseApiPlatform };
