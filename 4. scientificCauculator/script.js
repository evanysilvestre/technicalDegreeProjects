// Horário
const clock = document.querySelector('#clock')

clock.addEventListener('load', trick)

function trick () {
    let now = new Date()
    let data = now.getDate()
    let mounth = now.getMonth()
    let year = now.getFullYear()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    const html = `<span>${data}.${mounth+1}.${year}, ${h}:${m}:${s}</span>`

    clock.innerHTML = html
}
setInterval(trick, 1000)

function calcular(tipo, valor){
    if (tipo === 'acao') {
        if (valor === 'ce') {
            document.getElementById('resultado').value = ''
        }
        if (valor === '+' || valor === '-' || valor==='*' || valor==='/') {
            
        }
    } else if(tipo === 'valor') {

        document.getElementById('resultado').value += valor
    }
}