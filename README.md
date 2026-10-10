# Casa Criativa · Camilão, o Comilão

Landing page estática, sem dependências de execução.

- `npm run dev`: preview em http://localhost:4173/eventos/camilao-o-comilao/
- `npm run build`: gera `dist` para a Netlify.
- `npm test`: verifica a mensagem de reserva e o HTML gerado (executar após o build).

O domínio canônico usa `SITE_URL` ou a variável `URL` da Netlify durante o build. A raiz redireciona para a página do evento na Netlify.

## Recursos e pendências de fidelidade

O HTML/CSS enviado foi integrado à rota existente. `reference/` guarda o manifesto, instruções e preview recebidos. `public/assets/imagens/` contém os recursos utilizados:

- Fotos dos porquinhos e livro: arquivos originais `WhatsApp Image 2026-10-10 at 08.03.51 (2).jpeg`, `08.03.52.jpeg` e `08.03.52 (1).jpeg`, encontrados em Downloads. Os enquadramentos são feitos em CSS; os arquivos não foram retocados.
- Retrato e logo: arquivos `images/fundadora.webp` e `images/brand/casa-criativa-logo.png` do site público https://criativehouse.netlify.app/. O retrato é alternativo ao do preview, não o arquivo `prof_lu_original.webp` citado no manifesto.
- Materiais e lanche: novas imagens JPG enviadas pelo usuário para substituir os dois cards. A imagem de compartilhamento também foi fornecida pelo usuário.
- Ícones: SVGs simples locais de apoio; os SVGs mencionados no manifesto não estavam entre os arquivos acessíveis.

Para reproduzir também os enquadramentos exatos do preview, ainda faltam os arquivos individuais `hero_referencia_layout.webp`, `prof_lu_original.webp`, `prof_lu_card.webp`, `porquinho_branco_original.webp`, `etapa_01_livro.webp`, `etapa_02_pintura.webp`, `etapa_03_levar.webp`, e as pastas `icones/` e `graficos/` do kit. Não há placeholders ou imagens quebradas: foram usadas as fontes alternativas acima, informadas ao usuário. O logo do site tem prioridade sobre a marca ilustrativa do mockup.

A imagem Open Graph fornecida está integrada. O build converte sua URL em absoluta usando `SITE_URL` ou `URL` da Netlify; definir o domínio final antes de publicar fora da Netlify.

A reserva é solicitada pelo WhatsApp e confirmada pela equipe; não há armazenamento de dados nem contagem fictícia de vagas.
