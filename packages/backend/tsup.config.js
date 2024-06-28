import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/server.ts'], // adjust to your backend entry point
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs'], // only CommonJS format is needed for backend
    outDir: 'dist',
    target: 'node20', // adjust according to your Node.js version
    shims: false,
});