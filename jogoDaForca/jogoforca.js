    let erros = 6;
    let acertos = 0;
    var p = sorteioPalavras();
    criarLinhas(p);
    document.getElementById("btn").addEventListener("click", function(){checarLetra(p, erros, acertos)});


function sorteioPalavras() {
    let palavras  = ["despertador", "entorpecido", "colher", "arado", "sucesso", "xilofone", "maiô", "tomate", "zeus", "senhoria"];
    let p = Math.floor(Math.random() * palavras.length);
    let palavra = palavras[p].toString();
    console.log(palavra);
    return palavra;
}
function criarLinhas(p) {
    for(i = 0; i < p.length;i++) {
        document.getElementById("palavra").innerHTML += "<div class='letras'> __ </div>";
    };
};

//Checar Letra 

function checarLetra(pa, erros, acertos) {
    let letra = document.getElementById("letra").value;
    let underlines = document.getElementById("palavra").children;
    let arrUnderlines = [...underlines];
    for(i = 0; i < pa.length; i++) {
        if(letra == pa[i]) {
            arrUnderlines[i].innerHTML = letra;
            acertos++
            
            }
        }; 
    let error = document.getElementById("erros").innerHTML;
    let erro = document.getElementById("erros").children
    let arrErro = [...erro];
    for(j = 0; j < pa.length; j++) {
        if(letra != pa[j] && arrErro.includes(letra) == false) {
        arrErro += "<div class='erro'>" + letra +  "</div>"
        }
    }
};
