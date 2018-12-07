var lista = document.getElementsByClassName("clase");

function prepararBotones(){
  for (var i = 0; i < lista.length; i++){
    lista[i].addEventListener("click", mostrar(lista[i].innerHTML));
  };
};

function mostrar(t){
  return function(){
    console.log(t);
  };
};
