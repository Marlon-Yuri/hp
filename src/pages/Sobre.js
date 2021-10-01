import React from 'react'

import { Link } from 'gatsby'

import styled from "styled-components"



const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justyfy-content: center;
  align-items: center;
  text-align: center;

background-image: url(https://cdn.wallpapersafari.com/74/70/jkGo6E.jpg);
background-size: contain;


  h1{
      font-size: 3rem;
      text-decoration: underline wavy #ebcb1e ;
      color: #FFFAFA;
}


  p{
      
      font-size: 20px;
      color: #FFFAFA;
      text-align: center;
  }

  h2{
      font-size:20px;
      color: #FFFAFA;
  }


img {
    border-radius: 20%;
    border: solid;
    border-color: #ebcb1e ;
  }

  img:hover {
    cursor: default;
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    border-color: #457d58;;
  
  }



`



export default function Sobre() {
    return (
        <Container>

            <div classNAme="boxContainer">
                <h1>   J. K. Rowling  </h1>
                <p> Joanne "Jo" Rowling, mais conhecida como J. K. Rowling, é uma escritora, roteirista e produtora cinematográfica britânica, notória por escrever a série de livros Harry Potter. Os livros ganharam uma popularidade mundial, recebendo múltiplos prêmios e vendendo mais de 500 milhões de cópias. Eles se tornaram a série literária mais vendida da história. A Warner Bros. adaptou os livros para o cinema, fazendo com que os filmes entrassem na lista de filmes de maior bilheteria. </p>

                <img src="https://todateen.com.br/wp-content/uploads/2019/06/0530_JK-Rowling-Harry-Potter.jpg" alt="Foto de J. K. Rowling" width="500px" />
            </div>

          
                <h2> Assinatura  </h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/JKRowlingsignature.png/150px-JKRowlingsignature.png" alt="Assinatura de J. K. Rowling" width="300px" />

            <Link to="/"> <button> Voltar </button> </Link>

        </Container>
    )
}