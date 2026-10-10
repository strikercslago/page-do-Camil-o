# KIT DE ASSETS | CASA CRIATIVA | CAMILÃO, O COMILÃO

Este kit reúne os recursos EM ARQUIVOS INDIVIDUAIS para o Codex recriar a landing page seguindo o layout aprovado.

## Organização

- `referencia/layout_aprovado.png`: print usado como referência exata de composição.
- `imagens/`: arquivos separados `.webp` ou `.png` para hero, cards, etapas, apresentação e marca do mockup.
- `icones/`: SVGs INDIVIDUAIS de calendário, relógio, vagas, valor, livro, porquinho, paleta, lanche, seta, pincel e WhatsApp.
- `graficos/`: fundos abstratos, pincelada, coração e ilustrações vetoriais em SVG separados.
- `implementacao_referencia/`: `index.html`, `styles.css` e `script.js` executáveis como protótipo visual e referência para o Codex.
- `manifesto_assets.json`: identificadores, destinos e avisos para integração.

## COMO USAR NO CODEX

1. Extraia o ZIP no repositório de projeto, de preferência em uma pasta de assets.
2. Envie também `referencia/layout_aprovado.png` e solicite reprodução fiel da composição, da paleta, da tipografia e dos espaçamentos.
3. O arquivo `implementacao_referencia/index.html` fornece uma implementação **estática de demonstração**, NÃO uma solução em framework integrada ao projeto. O Codex deve converter para os componentes e rotas já usados no site.
4. Use `imagens/hero_referencia_layout.webp` para a maior semelhança visual ao preview, ou `imagens/hero_foto_original.webp` para priorizar foto 100% real do espaço.
5. Use cada SVG individualmente nos pontos correspondentes. Botões e cards devem ser HTML/CSS real (não screenshot).
6. Não criar qualquer contagem falsa de vagas; capacidade de 12 vagas é verdadeira, disponibilidade precisa ser confirmada pela equipe.

## AVISOS DE FIDELIDADE

- **Logotipo**: `logo_referencia_alta_resolucao.png` (e `logo_extraida_do_preview.png`) foram recortados da imagem de referência. É apenas uma réplica visual, não um arquivo oficial de marca; substitua pelo logotipo fornecido pela Casa Criativa se estiver disponível.
- **Materiais e lanche**: os arquivos `materiais_referencia_mockup.webp` e `lanche_referencia_mockup.webp` foram isolados do preview. São imagens ilustrativas e **não fotos reais do que será servido ou disponibilizado**. O conteúdo exato do lanche não foi confirmado. Pode usar as ilustrações `graficos/materiais_ilustracao.svg` e `graficos/lanche_ilustracao.svg` como alternativas honestas, ou substituir por fotos reais.
- **Fotos originais**: `prof_lu_*`, `porquinho_*_original.webp`, `etapa_*` e `livro_camilao_original.webp` usam arquivos da conversa, sem criar novos objetos.
- **Hero de referência**: é recorte direto da composição aprovada, não uma foto de câmera independente.
- **Hero foto real**: vem diretamente do arquivo fotográfico fornecido, mas tem proporção vertical; ajuste o enquadramento responsivo no código.
- Previews anteriores tinham dados inventados. A versão correta para este evento é **17/10/2026, 14h–16h30, R$ 130 por criança, apenas 12 vagas**.
- Nenhum clique no WhatsApp confirma inscrição; a equipe deverá confirmar disponibilidade e pagamento.

## REFERÊNCIAS DE DIMENSIONAMENTO

- Container desktop aproximado: 1160px de largura máxima.
- Header: 88px de altura.
- Hero: duas colunas, ~46/54, altura ~467px na versão de demonstração.
- Informações rápidas: faixa horizontal com 4 dados no desktop e grade 2x2 no mobile.
- Benefícios: 4 cards por linha desktop, 2 por linha em celular.
- Como funciona: 3 passos na mesma linha desktop, coluna no mobile.
- Prof Lu e FAQ: 2 colunas desktop, coluna no mobile.
- CTA final em faixa arredondada.

## TEXTOS QUE NÃO DEVEM SER INVENTADOS

Faixa etária oficial, permanência dos pais, conteúdo exato do lanche, condições de pagamento e eventuais descontos são pendentes de validação com a Casa Criativa.
