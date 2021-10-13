import React from 'react'

import * as S from './style'
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ebcb1e;
  transition: 2s;
  &:hover {
    color: red;
  }
`;


export function Header() {
  return (
    <S.Container>

       <img src ="https://cdn.shopify.com/s/files/1/0100/8176/3385/files/Harry-Potter-Logo.png?v=1597938413" alt="" width="300"/>
    
      <S.List>

        <li>
      <StyledLink to="/Sobre">J. K.Rowling</StyledLink>
      </li>
      
      <li>
      <StyledLink to="/Contatos"> Casas </StyledLink>   

</li> 
      </S.List>

    </S.Container>
  )
}
