/**
 * Aula 05 — Hall da Fama dos RPGs
 * Catálogo de RPGs eletrônicos (Skyrim, Elden Ring, Witcher 3, Baldur's Gate 3).
 * Canvas: nota média por subgênero + Erro 2 (sem clearRect) e correção.
 * Cristal: comparação SVG (retained) × Canvas (immediate).
 */

// Mundo Aberto 9.5 · Souls-like 9.7 · CRPG Tático 9.8  (nota x10 em pixels)
const dados = [95, 97, 98];
const cores = ['#6B9B37', '#8C2F2F', '#2F6B8C'];

const canvasErrado = document.getElementById('grafico-errado');
const ctxErrado = canvasErrado.getContext('2d');

const canvas = document.getElementById('grafico-notas-rpg');
const ctx = canvas.getContext('2d');

let animacaoErradaId = null;
let animacaoCorrigidaId = null;

function desenharEixos(contexto, largura, altura) {
  contexto.strokeStyle = '#4a3c2a';
  contexto.lineWidth = 1;
  contexto.beginPath();
  contexto.moveTo(20, 10);
  contexto.lineTo(20, altura - 20);
  contexto.lineTo(largura - 10, altura - 20);
  contexto.stroke();

  contexto.fillStyle = '#bba98c';
  contexto.font = '11px sans-serif';
  contexto.fillText('Mundo Aberto', 24, altura - 6);
  contexto.fillText('Souls-like', 138, altura - 6);
  contexto.fillText('CRPG Tático', 232, altura - 6);
}

function limparCanvas(contexto, elemento) {
  contexto.clearRect(0, 0, elemento.width, elemento.height);
}

/* ---------- Etapa 3 — ERRADO: animação sem limpar o canvas (rastro) ---------- */
function animarErrado() {
  limparCanvas(ctxErrado, canvasErrado);
  desenharEixos(ctxErrado, canvasErrado.width, canvasErrado.height);

  let altura = 0;

  function frame() {
    // ERRADO — cada frame desenha por cima do anterior, criando um rastro
    // (propositalmente SEM clearRect aqui)
    altura += 2;
    ctxErrado.fillStyle = cores[0];
    ctxErrado.fillRect(30, 180 - altura, 60, altura);

    if (altura < dados[0]) {
      animacaoErradaId = requestAnimationFrame(frame);
    }
  }

  animacaoErradaId = requestAnimationFrame(frame);
}

/* ---------- Etapa 4 — CORRETO: clearRect a cada frame, três barras "subindo de nível" juntas ---------- */
function animarCorrigido() {
  let altura = 0;
  const alvoMax = Math.max(...dados);

  function frame() {
    // CORRETO — limpa o canvas inteiro antes de redesenhar cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharEixos(ctx, canvas.width, canvas.height);

    altura += 3;

    const posX = [30, 144, 238];
    dados.forEach((alvo, i) => {
      const alturaAtual = Math.min(altura, alvo);
      ctx.fillStyle = cores[i];
      ctx.fillRect(posX[i], 180 - alturaAtual, 60, alturaAtual);
    });

    if (altura < alvoMax) {
      animacaoCorrigidaId = requestAnimationFrame(frame);
    }
  }

  animacaoCorrigidaId = requestAnimationFrame(frame);
}

function cancelarAnimacoes() {
  if (animacaoErradaId) cancelAnimationFrame(animacaoErradaId);
  if (animacaoCorrigidaId) cancelAnimationFrame(animacaoCorrigidaId);
}

document.getElementById('btn-errado').addEventListener('click', () => {
  cancelarAnimacoes();
  animarErrado();
});

document.getElementById('btn-corrigido').addEventListener('click', () => {
  cancelarAnimacoes();
  limparCanvas(ctx, canvas);
  animarCorrigido();
});

/* Estado inicial: eixos vazios nos dois canvases */
desenharEixos(ctxErrado, canvasErrado.width, canvasErrado.height);
desenharEixos(ctx, canvas.width, canvas.height);

/* ---------- Exercício Guiado — Cristal Arcano em Canvas ---------- */
const ctxCristal = document.getElementById('cristal').getContext('2d');

ctxCristal.fillStyle = '#241a3d';
ctxCristal.beginPath();
ctxCristal.arc(50, 50, 45, 0, Math.PI * 2);
ctxCristal.fill();

ctxCristal.fillStyle = '#8fd8ff';
ctxCristal.beginPath();
ctxCristal.arc(38, 30, 4, 0, Math.PI * 2);
ctxCristal.fill();

ctxCristal.beginPath();
ctxCristal.arc(66, 64, 3, 0, Math.PI * 2);
ctxCristal.fill();

ctxCristal.fillStyle = '#4fc3f7';
ctxCristal.strokeStyle = '#8fd8ff';
ctxCristal.lineWidth = 3;
ctxCristal.beginPath();
ctxCristal.moveTo(50, 15);
ctxCristal.lineTo(72, 50);
ctxCristal.lineTo(50, 85);
ctxCristal.lineTo(28, 50);
ctxCristal.closePath();
ctxCristal.fill();
ctxCristal.stroke();
