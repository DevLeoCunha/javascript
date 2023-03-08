function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
// bom dia
img.src = 'imagens/manha.png'
document.body.style.background = '#acf2f5'
} else if (hora >= 12 && hora <= 18) {
// boa tarde
img.src = 'imagens/tarde.png'
document.body.style.background = '#ffc77d'
} else {
//boa noite
img.src = 'imagens/noite.png'
document.body.style.background = '#332f2f'
}

}