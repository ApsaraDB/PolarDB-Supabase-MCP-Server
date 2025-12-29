import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    sourcemap: true,
    dts: true,
    minify: true,
    splitting: true,
    // 将所有依赖项打包进 bundle
    noExternal: [
      '@modelcontextprotocol/sdk',
      'zod',
      'zod-to-json-schema',
    ],
  },
]);
