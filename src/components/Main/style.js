import styled from "styled-components";

export const Container = styled.div`
  background-image: url(https://1.bp.blogspot.com/-Jw4IZGBPNok/VzW9PaNrffI/AAAAAAAAAy8/MBTr3cH0fuE-quXwyfSIyDUw0aAeBC95QCLcB/s1600/Harry-Potter-Wallpaper-Quotes-2.png);
background-size: contain;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;

  margin: 1rem; 
   background-image: url(https://cdn.wallpapersafari.com/74/70/jkGo6E.jpg);
}



h1{
 font-size: 20px;
 color: #ebcb1e;
;
 text-decoration: underline wavy red;
}

h1: hover{
color: red;

}

p{
  font-size: 20px;
 color: #ebcb1e;

}

p:hover{
color: red;
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
    border-color: red;
  
  }

`;