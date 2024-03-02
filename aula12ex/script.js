var horario = new Date().getHours()
var texto = document.querySelector("p")
var img = document.querySelector("img")
var fundo = document.querySelector("body")

if (horario >= 0 && horario < 12) {
    alert("MADRUGADA")
    }else if (horario >= 12 && horario < 18){
    img.src = "horarios/dia.jpeg"
    fundo.style.backgroundColor= "lightblue"
    }else if (horario >= 18) {
    alert("NOITE")
    }

    texto.innerText = "Agora são " + horario + ":00 Horas"