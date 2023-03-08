function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/baby-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adult-m.png')
            } else {
                img.setAttribute('src', 'imagens/old-m.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/baby-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adult-f.png')
            } else {
                img.setAttribute('src', 'imagens/old-f.png')
        } 
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
}