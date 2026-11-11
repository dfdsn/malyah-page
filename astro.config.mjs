import { defineConfig } from 'astro/config';

// Páginas geradas como arquivos (quem-somos.html) e CSS embutido:
// o site funciona em qualquer hospedagem estática, até abrindo os arquivos direto.
export default defineConfig({
  build: { format: 'file', inlineStylesheets: 'always' },
});
