function salvarUsuario(nome, email, senha, bio) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (usuarios.find(u => u.email === email)) {
    alert("E-mail já cadastrado!");
    return;
  }
  usuarios.push({ nome, email, senha, bio });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  /*Sor, vou admitir, esses bagulho de Local storage foi tudo com ajuda do gepeto ta?
   Eu realmente queria fazer isso pq achei legal mas n sabia fazer. mas eu n só copiei tudo não tá?*/
  alert("Cadastro realizado com sucesso!");
  window.location = "login.html";
}

function login(email, senha) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  if (usuario) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    alert("Login realizado com sucesso!");
    window.location = "perfil.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
}

if (document.getElementById("btnCadastrar")) {
  document.getElementById("btnCadastrar").onclick = () => {
    salvarUsuario(
      nomeCadastro.value,
      emailCadastro.value,
      senhaCadastro.value,
      bioCadastro.value
    );
  };
}

if (document.getElementById("btnEntrar")) {
  document.getElementById("btnEntrar").onclick = () => {
    login(emailLogin.value, senhaLogin.value);
  };
}
