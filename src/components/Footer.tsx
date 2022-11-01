import React from "react"
import styled from "styled-components"

export default function Footer() {
    return ( <StyledFooter>
            <p id="credit">Made with ❤️  by  <a rel="noreferrer" target="_blank" href="https://saurabhmehta.vercel.app">Saurabh</a></p>
    </StyledFooter>)
}

const StyledFooter = styled.footer`
    background-color: var(--clr-dark2) ;
    display:grid;
    place-items:center ;
    color:#ddd;
    padding: 1em ;
    font-family:sans-serif ;
    p {
        padding:0.3em ;
        word-spacing: 4px ; 
        letter-spacing: 2px;
    }
    a{
        color:#eee ;
        text-decoration:none ;
    }
    #credit {
        font-size: 1.2rem ;

        a {
            color: #4ff766 ;
        }
    }
`
