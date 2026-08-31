document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#video-boas-vindas");
  const status = document.querySelector("#formato-suportado");

  if (!video || !status || typeof video.canPlayType !== "function") {
    return;
  }

  const formatos = [
    {
      tipo: 'video/webm; codecs="vp9, opus"',
      rotulo: "WebM (VP9)",
    },
    {
      tipo: "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"",
      rotulo: "MP4 (H.264)",
    },
  ];

  const resultado = formatos.map((formato) => ({
    ...formato,
    suporte: video.canPlayType(formato.tipo),
  }));

  const escolhido =
    resultado.find((item) => item.suporte === "probably") ||
    resultado.find((item) => item.suporte === "maybe");

  if (!escolhido) {
    status.textContent =
      "Nenhum dos formatos desta página retornou suporte neste navegador.";
    return;
  }

  status.textContent = `Seu navegador provavelmente vai usar ${escolhido.rotulo} (canPlayType: "${escolhido.suporte}").`;
});
