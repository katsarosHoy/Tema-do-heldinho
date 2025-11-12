document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chatBox");
  const input = document.getElementById("msgInput");
  const enviar = document.getElementById("enviarBtn");

  const mensagens = JSON.parse(localStorage.getItem("chatMensagens")) || [];

  mensagens.forEach(msg => adicionarMensagem(msg.texto, msg.tipo));

  function enviarMsg() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarMensagem(texto, "user");

    mensagens.push({ texto, tipo: "user" });
    localStorage.setItem("chatMensagens", JSON.stringify(mensagens));

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      const resposta = gerarRespostaAutomatica(texto);
      adicionarMensagem(resposta, "bot");
      mensagens.push({ texto: resposta, tipo: "bot" });
      localStorage.setItem("chatMensagens", JSON.stringify(mensagens));
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }

  function adicionarMensagem(texto, tipo) {
    const msg = document.createElement("div");
    msg.classList.add("msg");
    msg.textContent = texto;

    if (tipo === "user") {
      msg.style.background = "#0077b6";
      msg.style.color = "white";
      msg.style.alignSelf = "flex-end";
    } else {
      msg.style.background = "#90e0ef";
      msg.style.color = "#023e8a";
      msg.style.alignSelf = "flex-start";
    }

    chatBox.appendChild(msg);
  }

  function gerarRespostaAutomatica(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("oi") || msg.includes("olá")) {
      return "Olá! 😄 Como posso ajudar na sua próxima viagem?";
    }
    if (msg.includes("viagem") || msg.includes("destino")) {
      return "Temos várias opções de destinos incríveis! ✈️";
    }
    if (msg.includes("obrigado")) {
      return "De nada! 😉 Boa viagem!";
    }
    return "Interessante! Conte-me mais sobre isso.";
  }

  enviar.addEventListener("click", enviarMsg);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") enviarMsg();
  });
});
