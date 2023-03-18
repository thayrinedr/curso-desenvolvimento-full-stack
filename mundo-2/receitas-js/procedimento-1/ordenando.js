
add = () => {
  let valorDeEntrada = document.getElementById("valor").value;
  console.log('valorDeEntrada: ' + valorDeEntrada);
  
  let listaValoresHtml = document.getElementById("valores");
  console.log(listaValoresHtml);
  
  let node = document.createElement("li");
  console.log(node);
  
  let textoNode = document.createTextNode(valorDeEntrada);
  console.log(textoNode);

  node.appendChild(textoNode);
  console.log(node);
  
  listaValoresHtml.appendChild(node);
  console.log(listaValoresHtml);

  document.getElementById("valor").value = ''
};

ordenar = () => {
  let listaValoresHtml = document.getElementById("valores");
  console.log(listaValoresHtml);
  
  let listaSelecaoHtml = document.getElementById("seleciona");
  console.log(listaSelecaoHtml);
  
  let listaValores = [];
  
  for (const child of listaValoresHtml.children) {
    console.log(child.textContent);

    listaValores.push(Number(child.textContent));
  }
  console.log(listaValores);

  let listaSelecaoOrdenacao = document.getElementById("seleciona");
  console.log(listaSelecaoOrdenacao);
  
  let valorOrdenacaoSelecionada = listaSelecaoOrdenacao.value;
  console.log(valorOrdenacaoSelecionada);
  
  switch (valorOrdenacaoSelecionada) {
    case "1":
      bubbleSort(valores=listaValores);
      atualizaLista(valores=listaValores);
      break;
    case "2":
      selectSort(valores=listaValores);
      atualizaLista(valores=listaValores);
      break;
    default:
  };
};

misturar = () => {
  let listaValoresHtml = document.getElementById("valores");
  let listaValores = [];
  
  for (const child of listaValoresHtml.children) {
    console.log(child.textContent);

    listaValores.push(Number(child.textContent));
  }
  console.log(listaValores);
  shuflle(valores=listaValores);
  atualizaLista(valores=listaValores);
  console.log(listaValores);
}

atualizaLista = (valores) => {
  let listaValoresHtml = document.getElementById("valores");
  console.log(listaValoresHtml);

  listaValoresHtml.innerHTML = ""; 
  console.log(listaValoresHtml);
  
  for (const valor of valores) {
    console.log(valor);
    
    let node = document.createElement("li");
    console.log(node);
    
    let textoNode = document.createTextNode(valor);
    console.log(textoNode);
    
    node.appendChild(textoNode);
    console.log(node);
    
    listaValoresHtml.appendChild(node);
    console.log(listaValoresHtml);
  }
  console.log(valores);
  
};

bubbleSort = (valores) => {
  console.log('bubbleSort');
  
  console.log(valores); 

  let length = valores.length;  
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < (length - i - 1); j++) { 
      if(valores[j] > valores[j+1]) {
        let tmp = valores[j]; 
          valores[j] = valores[j+1]; 
          valores[j+1] = tmp; 
      }
    }        
  } 
  console.log(valores); 
};

selectSort = (valores) => {
  console.log("selectSort");
  
  for (let i = 0; i < valores.length-1; i++){
    for (let j = i + 1; j < valores.length; j++){
      if (valores[j] < valores[i]){
        let menorValor = valores[j] 
        let maiorValor = valores[i] 
        
        valores[i] = menorValor;
        valores[j] = maiorValor;
      };
    };
  };
  console.log(valores)
};

shuflle = (valores) => {
  console.log("shuflle");
  for (let i = valores.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() *(i+1));
    let temp = valores[i];
    valores[i] = valores[j];
    valores[j] = temp;
  }
  console.log(valores);
};
