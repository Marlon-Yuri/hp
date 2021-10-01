import Styled from "styled-components"

export const BoxList=Styled.div`
display: flex;
background-image: url(https://cdn.wallpapersafari.com/74/70/jkGo6E.jpg);

h1{
    color: #ebcb1e;
}
` 

export const Container = Styled.div `
list-style: none;

`

export const List = Styled.ul`
width: 100vw;
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

export const ListItem = Styled.li `
color: white;
font-size: 20px;
cursor: pointer;

`


