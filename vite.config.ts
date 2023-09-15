import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import UnoCSS from 'unocss/vite';
import unocssConfig from './uno.config';

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint(), UnoCSS(unocssConfig)],
  envDir: _resolve('environments'),
  server: {
    cors: true,
    port: 8080
  },
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@utils': _resolve('src/utils'),
      '~': _resolve('')
    },
    extensions: ['.ts', '.js']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/styles/common.scss';`
      }
    }
  },
  json: {
    namedExports: true,
    stringify: false
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    minify: 'terser',
    chunkSizeWarningLimit: 500
  }
});
