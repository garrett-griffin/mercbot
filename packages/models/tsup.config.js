import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'], // only CommonJS format is needed for models
    outDir: 'dist',
    target: 'node20', // adjust according to your Node.js version
    shims: false,
});