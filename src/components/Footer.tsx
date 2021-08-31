import React from "react"
import styled from "styled-components"

export default function Footer() {
    return ( <StyledFooter>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>)
}

const StyledFooter = styled.footer`
    background-color: var(--clr-dark2) ;
    word-spacing: 4px ; 
    letter-spacing: 2px;
    color:#ddd;
    text-align: center ;
    padding: 1em ;
`
