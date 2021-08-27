import React from "react"
import styled from "styled-components"

export default function  PlaybackControls(){
    return (<StyledControl>
                <button>Start</button>
            </StyledControl>)
}

const StyledControl= styled.div`
    display: flex;
    justify-content: space-around;
    button {
        background: blue ;
        color:white ;
        padding: 0.2em 0.4em ;
        border-radius: 4px ;
        font-size: 1.125rem ;

    }
`
