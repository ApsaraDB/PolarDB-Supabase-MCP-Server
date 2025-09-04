#!/usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { parseArgs } from 'node:util';
import packageJson from '../../package.json' with { type: 'json' };
import { createSupabaseApiPlatform } from '../platform/api-platform.js';
import { PolarDBPlatform } from '../platform/polardb-platform.js';
import { createSupabaseMcpServer } from '../server.js';
import { parseList } from './util.js';

const { version } = packageJson;

async function main() {
  const parsed = parseArgs({
    options: {
      ['access-token']: {
        type: 'string',
      },
      ['project-ref']: {
        type: 'string',
      },
      ['read-only']: {
        type: 'boolean',
        default: false,
      },
      ['api-url']: {
        type: 'string',
      },
      ['anon-key']: {
        type: 'string',
      },
      ['service-role-key']: {
        type: 'string',
      },
      ['dashboard-username']: {
        type: 'string',
      },
      ['dashboard-password']: {
        type: 'string',
      },
      ['version']: {
        type: 'boolean',
      },
      ['features']: {
        type: 'string',
      },
    },
    // 允许位置参数与未知参数，以便兼容外部启动器（如 MCP Inspector）
    allowPositionals: true,
    strict: false,
  });

  // 安全提取并规范化参数类型，避免解析器将缺失值解析为 true
  const cliAccessToken = typeof parsed.values['access-token'] === 'string' ? parsed.values['access-token'] : undefined;
  const projectId = typeof parsed.values['project-ref'] === 'string' ? parsed.values['project-ref'] : undefined;
  const readOnly = typeof parsed.values['read-only'] === 'boolean' ? parsed.values['read-only'] : false;
  const apiUrl = typeof parsed.values['api-url'] === 'string' ? parsed.values['api-url'] : undefined;
  const anonKey = typeof parsed.values['anon-key'] === 'string' ? parsed.values['anon-key'] : undefined;
  const serviceRoleKey = typeof parsed.values['service-role-key'] === 'string' ? parsed.values['service-role-key'] : undefined;
  const dashboardUsername = typeof parsed.values['dashboard-username'] === 'string' ? parsed.values['dashboard-username'] : undefined;
  const dashboardPassword = typeof parsed.values['dashboard-password'] === 'string' ? parsed.values['dashboard-password'] : undefined;
  const showVersion = typeof parsed.values['version'] === 'boolean' ? parsed.values['version'] : false;
  const cliFeatures = typeof parsed.values['features'] === 'string' ? parsed.values['features'] : undefined;

  if (showVersion) {
    console.log(version);
    process.exit(0);
  }

  let platform;

  // 平台选择逻辑
  if (apiUrl && serviceRoleKey) {
    // PolarDB 模式
    const polarDbApiUrl = apiUrl ?? process.env.SUPABASE_API_URL;
    const polarDbServiceKey = serviceRoleKey ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
    const polarDbAnonKey = anonKey ?? process.env.SUPABASE_ANON_KEY;
    
    // Dashboard 配置（可选）
    const finalDashboardUsername = dashboardUsername ?? process.env.SUPABASE_DASHBOARD_USERNAME;
    const finalDashboardPassword = dashboardPassword ?? process.env.SUPABASE_DASHBOARD_PASSWORD;

    if (!polarDbApiUrl || !polarDbServiceKey) {
      console.error(
        'PolarDB mode requires --api-url and --service-role-key flags or SUPABASE_API_URL and SUPABASE_SERVICE_ROLE_KEY environment variables'
      );
      process.exit(1);
    }

    platform = new PolarDBPlatform({
      apiUrl: polarDbApiUrl,
      serviceRoleKey: polarDbServiceKey,
      anonKey: polarDbAnonKey || polarDbServiceKey,
      dashboardUsername: finalDashboardUsername,
      dashboardPassword: finalDashboardPassword
    });
  } else if (cliAccessToken) {
    // Cloud 模式
    const accessToken = cliAccessToken ?? process.env.SUPABASE_ACCESS_TOKEN;
    
    if (!accessToken) {
      console.error(
        'Cloud mode requires a personal access token (PAT) with the --access-token flag or set the SUPABASE_ACCESS_TOKEN environment variable'
      );
      process.exit(1);
    }

    platform = createSupabaseApiPlatform({
      accessToken,
      apiUrl,
    });

    // no-op: avoid stdout noise that can break MCP stdio transport
  } else {
    console.error(
      'Please provide either PolarDB configuration (--api-url --service-role-key) or Cloud configuration (--access-token)'
    );
    process.exit(1);
  }

  const features = cliFeatures ? parseList(cliFeatures) : undefined;

  const server = createSupabaseMcpServer({
    platform,
    projectId,
    readOnly,
    features,
  });

  const transport = new StdioServerTransport();

  await server.connect(transport);
}

main().catch(console.error);
