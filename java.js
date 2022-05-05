let contagem = 0;

document.getElementById("valor").innerText = contagem;

function cor() {
    if (contagem >= 1) {
        document.getElementById("valor").style.color = "lightgreen";
    } else if (contagem <= -1) {
        document.getElementById("valor").style.color = "red";
    } else {
        document.getElementById("valor").style.color = "white";
    }
}

function incrementar() {
    contagem++ 
    document.getElementById("valor").innerText = contagem;
    cor()
}

function decrementar() {
    contagem--
    document.getElementById("valor").innerText = contagem;
    cor()
}

function resetar() {
    contagem = 0
    document.getElementById("valor").innerText = contagem;
    cor()
}







