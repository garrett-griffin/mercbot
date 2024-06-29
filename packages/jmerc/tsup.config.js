import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['./index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
    outDir: 'dist',
    target: 'node20', // adjust according to your Node.js version
    shims: false,
    alias: {
        axios: 'axios/dist/axios.min.js',
    },
});