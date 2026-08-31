# Hall da Fama dos RPGs

Atividade prática da Aula 05 (HTML5 — Recursos Gráficos: Canvas e SVG) — Desenvolvimento Front-end para Web — entregue em 31/08/2026.

Tema próprio, distinto do exemplo do professor: um pequeno catálogo de RPGs eletrônicos lendários.

> **Nota:** nasceu como atividade avulsa, fora do fluxo contínuo do Projeto Integrador
> (na época, a "Taverna do D20"). Com a virada de tema pra RPGs eletrônicos, virou o
> compêndio ilustrado do [Ponto de Respawn](../index.html) — acessível a partir da
> página principal.

## O que tem aqui

- **Selo SVG "RPG Essencial"** (retained mode) em cada card do catálogo (Skyrim, Elden Ring, The Witcher 3, Baldur's Gate 3), com `viewBox` e nome acessível via `<title>`.
- **Gráfico de barras em Canvas** (immediate mode) com a nota média por subgênero (Mundo Aberto, Souls-like, CRPG Tático), animado via `requestAnimationFrame`.
- Demonstração proposital do **Erro 2** (animação sem `clearRect`) e a versão corrigida, lado a lado.
- Exercício guiado (não avaliativo): o mesmo ícone — um cristal arcano — desenhado em SVG e em Canvas, para comparar os dois paradigmas.

## Como rodar

Basta abrir `index.html` num navegador, ou servir a pasta com qualquer servidor estático:

```bash
python3 -m http.server 4173
```
