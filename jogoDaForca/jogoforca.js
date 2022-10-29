
    var p = sorteioPalavras(); 
    criarLinhas(p);
    
    var arrContador = [];
    var arrAcertosErros = [0, 6];
    
    //document.getElementById("btn").addEventListener("click", function(){controllerForca(p,acertos, erros)});
    
    function controllerForca(p, arrContador) {
        let letra = document.getElementById("letra").value;
        let contLetra = contadorLetra(letra,arrContador);
        contadorAcertosErros(p,contLetra,arrAcertosErros);
        inserirLetra(p, letra)
        checarVitoriaDerrota(p,arrAcertosErros)

    }

function sorteioPalavras() {
    let palavras  = ["despertador", "entorpecido", "colher", "arado", "sucesso", "xilofone", "maiô", "tomate", "zeus", "senhoria"];
    let p = Math.floor(Math.random() * palavras.length);
    let palavra = palavras[p];
    console.log(palavra);
    return palavra;
}
function criarLinhas(p) {
    for(let i = 0; i < p.length;i++) {
        document.getElementById("palavra").innerHTML += "<div class='letras'> __ </div>";
    };
};


//Inserir letra no array para evitar repetições

function contadorLetra(letra, arrContador = []) {
        if(arrContador.indexOf(letra) == -1) {
            arrContador.push(letra);
            
    }else {
        alert("Letra Repetida");
        return letra = ""
    }
  return arrContador[arrContador.length - 1]  ;
};
//Contar Num de Erros e Acertos

function contadorAcertosErros(pa,letra, arrAcertosErros) {
    for(let i = 0;i < pa.length; i++) {
        if(letra == pa[i]) {
           arrAcertosErros[0]  += 1;      
        };
    };
        if (letra && !pa.includes(letra)) {
        arrAcertosErros[1] -= 1;
    }
    return arrAcertosErros
}

//Checar Vitória 

function checarVitoriaDerrota(p,arrAcertosErros) {
    if(arrAcertosErros[1] == 0) {
        //Inserir mudança na img forca e reload da página
        return alert("Perdeu!!!");
    }else if(arrAcertosErros[0] == p.length) {
        //Inserir mudança na img forca e reload da página
        return alert("Vitória");
    };
};

//Inserir Letras

function inserirLetra(p, letra) {
    let palavraContainer = document.getElementById("palavra");
    for(let i = 0; i <p.length;i++) {
        if(letra == p[i]) {
            palavraContainer.childNodes[i + 1].innerHTML = letra;
        }

    }
}

        
        
    

