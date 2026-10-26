import { defineConfig } from 'vite';

// GitHub Pages serves the site from /noise-ledger/, not from the domain root.
export default defineConfig({
  base: '/noise-ledger/',
});
