// function clicou() {
//     alert("Você clicou no botão!") //quando houver click, essa mensagem aparece num alert.
// }

function clicou() {
    document.getElementById("thanks").innerHTML = "<b>Obrigado pelo click ;)</b>"; //qnd houver click, essa mensagem aparece dentro da tag p do codigo html.
}

function redirect() {
    window.open("https://www.globo.com"); //abre em outra aba.
    window.location.href = "https://www.globo.com"; //abre na mesma janela.
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse ;)"; //esta linha referenciava somente o id mousemove, porém se houvesse outro id na mesma pagina, seria necessário criar mais uma função para ele.
    // alert('trocar texto')
    elemento.innerHTML = "Obrigada por passar o mouse ;)" //qnd utilizamos o this no codigo, conseguimos reutilizar a mesma funcao para cada recorrencia do caso.
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui <=";
    elemento.innerHTML = "Passe o mouse aqui <=";
}

function load() {
    alert("Página carregada com sucesso.");
}


function funcaoChange(elemento) {
    console.log(elemento.value);
}


// function soma(n1,n2) {
//     return n1 + n2;
// }

// alert(soma(4,89));



// var d = new Date();
// alert(d.getMonth());


// CONDICIONAIS 


// var idade = prompt("qual a sua idade?");
// if(idade >= 18) {
//     alert("Maior de idade.");
// }else{
//     alert("Menor de idade.");
// };


// var count = 0;
// while(count<5) {
//     console.log(count);
//     count ++;
// }; 


// var count;

// for(count = 0; count <= 5; count++) {
//     alert(count);
// };



// ARRAYS E FUNCOES


// var fruta = {nome:"maçã", cor: "verde"}
// console.log(fruta.cor);

// var frutas = [{nome:"maçã", cor: "verde"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas[1].cor);


//---------------------------------
// var lista = ["maçã", "pêra", "melão"];

// .push adiciona um item ao array. .pop tira o último item.
// lista.push("uva");
// lista.pop();
// console.log(lista.length); //diz qts itens tem no array
// console.log(lista.reverse()); //coloca os itens em ordem reversa.
// console.log(lista.toString());
// console.log(lista.join(" - ")) // tb passa para string, mas você pode adicionar um separador. 


//-----------------------------
// var nome = "Stephanie Dias";
// var n1 = 31;
// var n2 = 10;
// var frase = "Chester maravilhoso!"

//alert é uma janela popup ao iniciar a página.

//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);

//console.log printa as informações na tela

// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("maravilhoso", "delicioso"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
