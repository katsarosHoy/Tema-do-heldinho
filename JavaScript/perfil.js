window.onload = () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Faça login primeiro!");
    window.location = "login.html";
    return;
  }

  document.getElementById("nomeUsuario").textContent = usuario.nome;
  document.getElementById("bio").textContent = usuario.bio || "Viajante sem bio ainda!";
  document.getElementById("logout").onclick = () => {
    localStorage.removeItem("usuarioLogado");
    window.location = "index.html";
  };
};
