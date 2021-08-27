import React from "react"
import styled from "styled-components"


export default function Header () {
    return ( <StyledHeader>
        <div className="logo">
           <h1> Sorting Visualizer </h1>
        </div>
            </StyledHeader>)
}

const StyledHeader = styled.header`
background-color: #333 ;
color: #ddd; 
padding: 1em ;
margin: 0; 
width:100vw ; 
`
