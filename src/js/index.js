/*Objetivo 1 - quando o usuário clicar no botão de mostrar MediaSession, deve abrir os projetos que estão escondidos no HTML 

        passo 01 - pegar o botão de mostrar mais no JS para poder verificar quando o usuário clicar em cima delete.

        passo 02 - identificar o clique no botão. 

        passo 03 - adicionar a classe ativo aos projetos escondidos

  Objetivo 1 - Esconder o botão de voltar mais. 
        
        passo 1 - pegar o botão e esconder ele.
/*
            passo 2 - identificar o clique no botão.

            passo 3 - esconder o botão.
*/
const btnMostrarMais = document.querySelector('.btn-mais');
const projetosOcultos = document.querySelectorAll('.projeto-oculto');   
const btnMostrarMenos = document.querySelector('.btn-menos');
btnMostrarMais.addEventListener('click', function() {
    for (let i = 0; i < projetosOcultos.length; i++) {
            projetosOcultos[i].classList.add('ativo');
      }
      btnMostrarMais.classList.add('inativo');
      btnMostrarMenos.classList.remove('inativo');
});

btnMostrarMenos.addEventListener('click', function() {
    for (let i = 0; i < projetosOcultos.length; i++) {
            projetosOcultos[i].classList.remove('ativo');
      }
      btnMostrarMais.classList.remove('inativo');
      btnMostrarMenos.classList.add('inativo');
});

