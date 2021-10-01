import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content: space-around;
background-image: url(https://cdn.wallpapersafari.com/74/70/jkGo6E.jpg);


img:hover{
 width: 350px;
}

`

export const List = styled.ul`
 width: 100%;
       display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    cursor: pointer;
    
    font-size: 3rem;
    list-style: none;
    text-decoration: none;

 `
