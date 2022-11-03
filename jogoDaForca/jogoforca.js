
var p = sorteioPalavras();
criarLinhas(p);

var arrContador = [];
var arrAcertosErros = [0, 6];

//document.getElementById("btn").addEventListener("click", function(){controllerForca(p,acertos, erros)});


//Enter no Input Field
document.getElementById("letra").addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        document.getElementById("btn").click()
    }
});


function controllerForca(p, arrContador) {
    let letra = document.getElementById("letra").value;
    let contLetra = contadorLetra(letra, arrContador);
    contadorAcertosErros(p, contLetra, arrAcertosErros);
    inserirLetra(p, letra)
    checarVitoriaDerrota(p, arrAcertosErros);
    imagemForca(p, letra, arrAcertosErros);
    document.getElementById("letra").select();
}

function sorteioPalavras() {
    let palavras = ["despertador", "entorpecido", "colher", "arado", "sucesso", "xilofone", "maio", "tomate", "zeus", "senhoria"];
    let p = Math.floor(Math.random() * palavras.length);
    let palavra = palavras[p];
    console.log(palavra);
    return palavra;
}
function criarLinhas(p) {
    for (let i = 0; i < p.length; i++) {
        document.getElementById("palavra").innerHTML += "<div class='letras'> __ </div>";
    };
};


//Inserir letra no array para evitar repetições e mostrar letras já digitadas na tela

function contadorLetra(letra, arrContador = []) {
    if (arrContador.indexOf(letra) == -1) {
        arrContador.push(letra);
        document.getElementById("letrasDigitadas").innerHTML += "<div class='letras_r'>" + letra + "</div>"
    } else {
        alert("Letra Repetida");
        return letra = ""
    }
    return arrContador[arrContador.length - 1];
};
//Contar Num de Erros e Acertos

function contadorAcertosErros(pa, letra, arrAcertosErros) {
    for (let i = 0; i < pa.length; i++) {
        if (letra == pa[i]) {
            arrAcertosErros[0] += 1;
        };
    };
    if (letra && !pa.includes(letra)) {
        arrAcertosErros[1] -= 1;
    }
    return arrAcertosErros
}

//Checar Vitória 

function checarVitoriaDerrota(p, arrAcertosErros) {
    let btnVelho = document.getElementById("btn");
    let btnNovo = document.getElementById("novoBtn");
    if (arrAcertosErros[1] == 0) {
        btnVelho.style.display = "none";
        btnNovo.style.display = "block";
        return alert("Perdeu!!!, A palavra é " + p);
    } else if (arrAcertosErros[0] == p.length) {
        btnVelho.style.display = "none";
        btnNovo.style.display = "block";
        return alert("Vitória");
    };
};

//Inserir Letras

function inserirLetra(p, letra) {
    let palavraContainer = document.getElementById("palavra");
    for (let i = 0; i < p.length; i++) {
        if (letra == p[i]) {
            palavraContainer.childNodes[i + 1].innerHTML = letra;
        }

    }
}

//Inserir Imagem na Forca Erro
function imagemForca(pa, letra,arrAcertosErros ) {
    let corpo = document.getElementById("corpoForca").children;
    let contador = arrAcertosErros[1];
    for(let i = 0;i < p.length;i++) {
        if(letra && !pa.includes(letra)) {
            corpo[contador].style.display = 'block';
        }
    }

    
}

//Recomeçar Jogo
function controllerReload() {
    location.reload()
}



