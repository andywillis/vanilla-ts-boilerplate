/* eslint-disable import/no-extraneous-dependencies */
import { splitVendorChunkPlugin, defineConfig } from 'vite';

import compress from 'vite-plugin-compression';

export default defineConfig({
  plugins: [ compress(), splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: './dist',
    sourcemap: true
  }
});
