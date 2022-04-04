import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      name: 'yello-ui',
      fileName: (name) => `yello.${name}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, `./src/assets/scss`),
      '@css-tokens': path.resolve(
        __dirname,
        `./styleDictionary/build/yello/scss/`
      ),
      '@css-tools': path.resolve(
        __dirname,
        `./src/assets/scss/tools`
      ),
      '@css-brand': path.resolve(
        __dirname,
        `./src/assets/scss/yello/`
      ),
      '@css-components': path.resolve(
        __dirname,
        `./src/assets/scss/shared/components`
      ),
      '@css-components-brand': path.resolve(
        __dirname,
        `./src/assets/scss/yello/components`
      )
    }
  },
  plugins: [
    vue(),
    copy({
      targets: [
        {
          src: 'dist/style.css',
          dest: 'docs/.vuepress/public/'
        },
      ],
      flatten: false,
      hook: 'writeBundle',
    })
  ]
})
