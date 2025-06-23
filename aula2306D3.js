function calcular() {
    var valor1 = document.getElementById("valor1")
    var valor2 = document.getElementById("valor2")
    var resultado = document.getElementById("result")

    var v1 = Number(valor1.value)
    var v2 = Number(valor2.value)
    var r = v1 + v2
    resultado.innerHTML = `Soma de ${v1} e ${v2} é ${r}`
}