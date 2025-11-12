const destinos = [
  {
    nome: "Rio de Janeiro - RJ",
    imagem: "img/RJ.jfif",
  },
  {
    nome: "Florianópolis - SC",
    imagem: "img/SC.jfif",
  },
  {
    nome: "Chapada Diamantina - BA",
    imagem: "img/BA.jfif",
  },
  {
    nome: "São Paulo - SP",
    imagem: "img/SP.jfif",
  },
  {
    nome: "Lençóis Maranhenses - MA",
    imagem: "img/MA.jpg",
  },
];

const container = document.getElementById("destinosContainer");

function carregarDestinos(lista) {
  container.innerHTML = "";
  lista.forEach(destino => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${destino.imagem}" alt="${destino.nome}">
      <h3>${destino.nome}</h3>
    `;
    container.appendChild(card);
  });
}

carregarDestinos(destinos);

const campoBusca = document.getElementById("busca");

campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();
  const filtrados = destinos.filter(d =>
    d.nome.toLowerCase().includes(termo)
  );
  carregarDestinos(filtrados);
});

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("🔒 Em breve: sistema de login e cadastro!");/*As vezes dá erro e ele 
te impede de logar, vai no perfil sai e loga ou só vai no sobre e dai em entrar*/
});

console.log(" Bem-vindo ao Caroneiro! Encontre sua companhia de viagem.");
