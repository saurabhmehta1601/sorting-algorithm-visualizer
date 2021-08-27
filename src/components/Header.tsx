import React from "react"
import styled from "styled-components"


export default function Header () {
    return ( <StyledHeader>
        <div className="logo">
           <h1> Sorting Visualizer </h1>
        </div>
        <div className="controls">
            <div className="control-group">
                <label htmlFor="bar-width-controller">Bar width</label>    
                <input name="bar-width-controller" className="bar-width-controller" type="range" min={200}  max={400} />
            </div>
        </div>
            </StyledHeader>)
}

const StyledHeader = styled.header`
    display:flex ;
    background-color: #333 ;
    color: #ddd; 
    padding: 1em ;
    margin: 0; 
    width:100vw ; 

    .controls {
        margin-left: auto ;
        padding: 0.5em 1em ;
    }

    .control-group {
        display: flex ;
        align-items:center;
        column-gap:0.5em ;
    }
`
