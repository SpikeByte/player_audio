let musicas = [
    {titulo:'Musica 02', artista:'Sian Shade', src:'musicas/'}
];

let musica  = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h3');
let nomeArtista= document.querySelector('.descricao i');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pausa').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);

duracaoMusica.innerText = segundosMinutos(Math.floor(musica.duration));

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pausa').style.display= 'block';
}
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pausa').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function atualizarBarra () {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration ) * 100) + '%';
    let contador = document.querySelector(".inicio");
    contador.innerText = segundosMinutos(Math.floor(musica.currentTime));
}
function segundosMinutos (segundos) {
    let dataMinutos = Math.floor(segundos/60);
    if (dataMinutos < 10) {
        dataMinutos = '0' + dataMinutos;
    }
    let dataSegundos = segundos % 60;
    if (dataSegundos < 10) {
        dataSegundos = '0' + dataSegundos;
    }
    return dataMinutos + ":" + dataSegundos;
}