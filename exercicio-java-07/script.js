const button = document.querySelector("input[value=analisar]")
const valorbox = document.querySelector("input[type=text]")
const lista = document.querySelector("#valores")
const finalizar = document.querySelector("input[value=finalizar]")

var lLista = []

button.onclick = () => {
    if (IsNumber(valorbox.value) && !inLista(valorbox.value)) {
        add(valorbox.value)
        valorbox.value = null
        valorbox.focus()
    } else{
        alert("algo errado")
    }
}

finalizar.onclick = () =>{
    let maior = lLista[0]
    let menor = lLista[0]
    let soma = 0
    let media = 0
    for (let i in lLista) {
        soma += lLista[i]
        if (lLista[i] > maior)
            maior = lLista[i]
        if (lLista[i] < menor)
            menor = lLista[i]
    }
    media = soma/lLista.length
    document.querySelector("body").innerHTML += ("Maior valor: " + maior)
    document.querySelector("body").innerHTML += ("Menor valor: " + menor)
    document.querySelector("body").innerHTML += ("Soma: " + soma)
    document.querySelector("body").innerHTML += ("Media: " + media)
}

function add(n) {
    lLista.push(Number(n))
    let newElement = document.createElement("option")
    newElement.innerText = n
    lista.appendChild(newElement)
}

function IsNumber(v) {
    if (Number(v) >= 1 && Number(v) <= 100) {
        return true
    } else{
        return false
    }
}

function inLista(v) {
    if (lLista.indexOf(Number(v)) != -1) {
        return true
    } else{
        return false
    }
}