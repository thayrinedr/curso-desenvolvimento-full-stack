let dadosReceitas = [
    {
      titulo:"Batida de Morango",
      imagem:"img/batida.png",
      ingredientes: ["5 morangos", "1 cx leite condensado", "100ml de Leite", "Vodka e Gelo"],
      preparo:"Bata tudo no liquidificador e está pronto para servir!"
    },

    {
      titulo:"Panquecas",
      imagem:"img/panquecas.png",
      ingredientes:["1 colher de açúcar", "3 colheres de fermento em pó","2 ovos levemente batidos", "1 xícara de leite", "2 colheres de manteiga derretida", "pitada de sal e óleo"],
      preparo:"Misture em um recipiente. Quando a massa estiver pronta leve a uma frigideira e espere assar.Vire a massa para assar do outro lado e está pronto. Adicione algumas frutas vermelhas de sua preferência para decorar!"
    },
    {
      titulo:"Shake Cappuccino",
      imagem:"img/shake.png",
      ingredientes:["Achocolatado (nescau ou toddy)","1 colher de nescafé Original ou Matinal","250 ml de leite","Açúcar se preciso"],
      preparo:"Após o leite estar congelado na forminha, retire da geladeira e coloque de 5 a 7 cubinhos junto aos demais ingredientes no liquidificador. Bata por alguns minutos até estar parecido com um shake. Sirva com calda de chocolate e chantilly!"
    }
]
getListaIngredientes = (ingredientes) => {
  let ingredientesHtml = new String();

  for (let ingrediente of ingredientes) {
    ingredientesHtml += "<li>" + ingrediente + "</li>";
  }
  return ingredientesHtml;
};

getCard = (receita) => {
  let card = '<div class="card" style="width: 250px; box-shadow: 1px 2px 3px #FF8C00;">' +
    '<img class="card-img-top" src="'+ receita.imagem +'" alt="imagem dos cards">' +
    '<div class="card-body">' +
    '<h3 class="card-title">' +
    receita.titulo +
    "</h5>" +
    "<ul>" + 
    getListaIngredientes(receita.ingredientes) + 
    "</ul>" + 
    receita.preparo + 
    "</div>";
  return card
};

preencheCatalogo = () => {
  let catalogo = document.getElementById("pnlCatalogo");

  for (let receita of dadosReceitas) {
    let card = getCard(receita);
    console.log(card);
    catalogo.innerHTML += card;
  }
};