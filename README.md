# Site Malyah

Site institucional estático feito com [Astro](https://astro.build). Gera HTML puro, rápido e fácil de hospedar em qualquer lugar.

## Rodar no computador

Requer Node.js 18.20+ (recomendado 20 ou 22).

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera o site final na pasta dist/
npm run preview  # testa o build localmente
```

## Onde editar o conteúdo

Quase tudo está em **`src/data/site.ts`**: nome da empresa, contatos, slides da home, serviços, time, projetos, clientes e depoimentos. Os itens marcados com `[PREENCHER]` são exemplos.

| O quê | Arquivo |
|---|---|
| Textos, contatos, slides, projetos, clientes | `src/data/site.ts` |
| Cores e visual | `src/styles/global.css` (variáveis no topo) |
| Logo (cabeçalho, rodapé e favicon) | `src/layouts/Base.astro` |
| Desenhos dos slides | `src/components/HeroSlider.astro` |
| Tempo de troca do slide (padrão 6 s) | `SLIDE_MS` em `src/components/HeroSlider.astro` |
| Logos de clientes | coloque em `public/clientes/` e informe `logo: 'clientes/arquivo.png'` |

## Formulário de contato

Sem configuração, o botão "Enviar" abre o e-mail do visitante com a mensagem pronta. Para receber direto na caixa de entrada, crie um formulário grátis no [Formspree](https://formspree.io), copie o endpoint (`https://formspree.io/f/xxxx`) e cole em `formEndpoint` no `site.ts`.

## Publicar (deploy)

O conteúdo da pasta `dist/` é o site completo. Opções gratuitas:

- **Netlify Drop:** rode `npm run build` e arraste a pasta `dist/` em https://app.netlify.com/drop.
- **Cloudflare Pages / Vercel / Netlify com GitHub:** suba este projeto num repositório, conecte e use
  build command `npm run build` e output directory `dist`.
- **Hospedagem comum (cPanel/FTP):** envie o conteúdo de `dist/` para a pasta `public_html`.

Depois é só apontar o domínio (ex.: `malyah.com.br`) nas configurações da hospedagem.
