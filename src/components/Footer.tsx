import React from "react"
import styled from "styled-components"

export default function Footer() {
    return ( <StyledFooter>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>)
}


const StyledFooter = styled.footer`
    background-color:#333;
    color:#ddd;
    text-align: center ;
    padding: 1em ;
    margin-top: auto ;
`
