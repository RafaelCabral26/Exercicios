(function () {
    let p = sorteioPalavras();
    criarLinhas(p);
    checarLetra();
    return p
})();
document.getElementById("letra").addEventListener("change",checarLetra())


function sorteioPalavras() {
    let palavras  = ["despertador", "entorpecido", "colher", "arado", "sucesso", "xilofone", "maiô", "tomate", "zeus", "senhoria"];
    let p = Math.floor(Math.random() * palavras.length);
    console.log(palavras[p])
    return palavras[p];
}
function criarLinhas(p) {
    for(i = 0; i < p.length;i++) {
        document.getElementById("palavra").innerHTML += "<div class='palavras'> __ </div>";
    }
}

//Checar Letra 

function checarLetra(p) {
    let letra = document.getElementById("letra").innerHTML;
    let palavra = 
    for(i=0;i< p.length;i++) {
        ;
    }
}