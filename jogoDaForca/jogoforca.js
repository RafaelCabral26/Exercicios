
    var p = sorteioPalavras(); 
    criarLinhas(p);
    document.getElementById("btn").addEventListener("click", function(){controllerForca(p,acertos, erros)});
    
    var arrContador = [];
    var erros = 6;
    var acertos = 0;
    
    function controllerForca(p) {
        let letra = document.getElementById("letra").value;
        contadorErrosAcertos(p,letra, acertos, erros, arrContador)
        checarVitoriaDerrota(acertos,erros);
        contadorLetra(p,letra,arrContador);
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
//Contar Num de Erros e Acertos
function contadorErrosAcertos(pa,letra, acertos, erros, arrContador) {
    for(let i = 0;i < pa.length; i++) {
        if(letra == pa[i] && arrContador.indexOf(letra) == -1) {
            acertos++
        }
    }
    for(let j = 0;j <p.length;j++)
        if(letra != pa[i]) {
        erros--
    }
}
//Checar Vitória 

function checarVitoriaDerrota(acertos, erros) {
    if(erros == 0) {
        //Inserir mudança na img forca e reload da página
        return alert("Perdeu!!!");
    }else if(acertos == p.length) {
        //Inserir mudança na img forca e reload da página
        return alert("Vitória");
    };
};

//Checar Letra 



function contadorLetra(pa, letra, arrContador) {
    for(let i = 0; i < pa.length; i++) {
        if(letra == pa[i] && arrContador.indexOf(letra) == -1) {
            arrContador.push(letra);
                
        };
    };  
};
        
        
    

