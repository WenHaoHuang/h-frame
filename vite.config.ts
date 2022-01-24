import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
  '@': pathResolve('src'),
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: "dist/types",
      staticImport: false,
      logDiagnostics: true,
      // cleanVueFileName: true,
      clearPureImport: false,
      copyDtsFiles: false,
      noEmitOnError: false
    }),
    vue(),
  ],
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: pathResolve('src/index.ts'),
      name: 'HgUi',
      fileName: 'index'
    },
    emptyOutDir: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
})
