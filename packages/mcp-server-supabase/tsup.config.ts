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
    // 复制提示词文件到 dist 目录
    onSuccess: 'cp -r src/prompts dist/',
  },
]);
