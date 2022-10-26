
    var p = sorteioPalavras(); 
    criarLinhas(p);
    
    var arrContador = [];
    var erros = 6;
    var acertos = 0;
    
    //document.getElementById("btn").addEventListener("click", function(){controllerForca(p,acertos, erros)});
    
    function controllerForca(p, arrContador) {
        let letra = document.getElementById("letra").value;
        let contLetra = contadorLetra(letra,arrContador);
        contadorErrosAcertos(p,contLetra,acertos,erros,arrContador);
       
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
    
};
//Contar Num de Erros e Acertos
function contadorErrosAcertos(pa,letra, acertos, erros, arrContador) {
    let trueOuFalse = false;
    for(let i = 0;i < pa.length; i++) {
        if(letra == pa[i]) {
            acertos++
            trueOuFalse = true 
            
        }
    }
    for(let j = 0;j <pa.length;j++) {

        if(letra != pa[j] && !trueOuFalse) {
           erros--
           return erros 
        }
        
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


        
        
    

