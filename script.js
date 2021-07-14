let textoInput = document.getElementById("textInput")
let btnCont = document.getElementById("countButton")
btnCont.addEventListener("click",  palavras )

function palavras(){
    let lettersDiv = document.getElementById("lettersDiv");
    let filhos = [...lettersDiv.childNodes]
    if(filhos.length>0){
        while(lettersDiv.firstChild){
            lettersDiv.removeChild(lettersDiv.firstChild)
        }
    }
    let inputValue = textoInput.value
    let letras ={}
    let objWords = {}
    inputValue = inputValue.toLowerCase()
    inputValue = inputValue.replace(/[^a-z'\s]+/g, "")
     /*Letras*/ 
     for(let i=0;  i < inputValue.length; i++){  
        let letraAtual = inputValue[i]
        if(letras[letraAtual] ===undefined){
            letras[letraAtual] = 1
        }else{
            letras[letraAtual] +=1
        }
       
    }
    /*Contando a quantidade de letras através do objeto*/ 
   
    for(let l in letras){
        let span = document.createElement('span')
        let txt = document.createTextNode(`"${l}":${letras[l]}, `)
        span.appendChild(txt)
       
        lettersDiv.appendChild(span)

    }
    /*PALAVRA*/
    let palavras = inputValue.split(" ") 
    for(let h=0; h<palavras.length; h++){
        let palavraAtual = palavras[h];
        if(objWords[palavraAtual] === undefined){
            objWords[palavraAtual] = 1
        }else{
            objWords[palavraAtual]++
        }
    }
   
    for(let pInside in objWords){
        let span2= document.createElement("span")
        let txt2 = document.createTextNode(` ${pInside}:${objWords[pInside]},  `)
        span2.appendChild(txt2)
        lettersDiv.appendChild(span2)
       

    }
   
}




