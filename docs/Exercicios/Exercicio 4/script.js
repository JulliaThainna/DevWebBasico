function showMedia( ) {
    document.getElementById("nome-aluno").innerHTML = document.getElementById("name").value;

    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let n3 = document.getElementById("n3");
    let n4 = document.getElementById("n4");
    let media = (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value)) / 4;

    document.getElementById("media-text").style.visibility = "visible";
    document.getElementById("media").innerHTML = media;
    let situacao;
    if(media >= 6){
        situacao = "Aprovado(a)";
    }
    else if(media < 6 && media <= 2){
        situacao = "Reprovado(a)";
    }
    else if(media >= 2.1 && media <= 5.9){
        situacao = "Recuperacao"
    }

    document.getElementById("situacao").innerHTML = situacao;
    console.log(situacao)
    let id_situacao = document.getElementById("situacao");
    if(situacao == "Aprovado(a)"){
        id_situacao.style.backgroundColor = "green";
    }
    else if(situacao == "Reprovado(a)"){
        id_situacao.style.backgroundColor = "red";
    }
    else{
        id_situacao.style.backgroundColor = "blue";
    }

    return false;
}