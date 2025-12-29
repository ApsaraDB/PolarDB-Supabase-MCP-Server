import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: [
      'src/index.ts', 
      'src/transports/stdio.ts', 
      'src/platform/index.ts',
      'src/server.ts',
      'src/prompts-loader.ts',
      'src/tools/polardb-tools.ts'
    ],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    sourcemap: true,
    dts: true,
    minify: false,
    splitting: false,
    loader: {
      '.sql': 'text',
      '.md': 'text',
    },
    // 将所有依赖项打包进 bundle，避免运行时依赖问题
    // 包括所有 dependencies 中的包和 workspace 依赖
    noExternal: [
      '@modelcontextprotocol/sdk',
      '@supabase/mcp-utils',
      'zod',
      'common-tags',
      'graphql',
      'openapi-fetch',
      '@mjackson/multipart-parser',
    ],
    // 复制提示词文件到 dist 目录
    onSuccess: 'cp -r src/prompts dist/',
  },
]);
