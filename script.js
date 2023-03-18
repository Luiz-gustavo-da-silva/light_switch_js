const divImagem = document.getElementsByClassName('div-imagem');
const body = document.getElementById('body');
const img = document.getElementById('imagem');

const linkImagens = [
    "./img/lampada_apagada.png",
    "./img/lampada_acesa.png",
]


if(localStorage.getItem('status') == "true"){
    body.classList.add("aceso");
    img.setAttribute('src', linkImagens[1]); 
}else{
    body.classList.remove("aceso");
    img.setAttribute('src', linkImagens[0]);
}



function ligarDesligar(){
    
    const body = document.getElementById('body');
    const img = document.getElementById('imagem');

    if(body.classList.contains("aceso")){
        body.classList.remove("aceso");
        img.setAttribute('src', linkImagens[0]);
        localStorage.setItem('status', false);

    }else{
        body.classList.add("aceso");
        img.setAttribute('src', linkImagens[1]); 
        localStorage.setItem('status', true);
    }

}



