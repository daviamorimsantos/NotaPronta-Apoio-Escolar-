# NotaPronta — site de apoio escolar

Site estático, responsivo e interativo feito com HTML, CSS e JavaScript puro. Pronto para personalizar e publicar no GitHub Pages.

## Arquivos
- `index.html`: conteúdo e estrutura da página
- `style.css`: identidade visual e layout responsivo
- `script.js`: menu mobile, botões de serviços/planos e formulário que prepara mensagem de WhatsApp

## Personalização obrigatória antes de publicar
1. Abra `index.html` e troque o nome **NotaPronta** pelo nome escolhido.
2. Em `script.js`, altere `WHATSAPP_NUMBER` para o número real, somente números, com código do país e DDD. Ex.: `5511998765432`.
3. Revise os preços iniciais de exemplo (R$ 10, R$ 20, R$ 35) no `index.html`.
4. Confira se os serviços, prazos e condições realmente correspondem ao que será oferecido.
5. Se quiser, altere as cores no começo de `style.css`, dentro de `:root`.

## Publicar no GitHub Pages
1. Entre no GitHub e crie um repositório público, por exemplo `site-notapronta`.
2. Envie `index.html`, `style.css` e `script.js` para a raiz do repositório (ou extraia este ZIP e envie os arquivos).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação e abra o endereço mostrado na área de Pages.

## Notas
- Não precisa instalar dependências nem usar servidor: é um site estático.
- A fonte usa Google Fonts; se não carregar, o site usa fontes alternativas.
- O formulário não salva dados. Ele monta uma mensagem e abre o WhatsApp depois que o número for configurado.
- O nome, preços e contato deste modelo são demonstrativos. Não publique sem revisá-los.
- A página divulga apoio à aprendizagem e organização escolar; o aluno deve conferir e compreender o material e seguir as regras da instituição.
