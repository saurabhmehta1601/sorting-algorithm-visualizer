import React from "react"
import styled from "styled-components"

export default function AlgoSelector(){
    return  (
        <StyledAlgoSelector>
            <option>Bubble Sort</option>
            <option>SelectionSort</option>
            <option>MergeSort</option>
        </StyledAlgoSelector>
    )
}


const  StyledAlgoSelector =  styled.select`
    position:absolute;
    word-spacing:4px;
    right:  0.1em ;
    top:0.2em ;
    padding-right:  0.3em;
    color:#eee;
    font-size:  1rem ;
    border: none ;
    margin :  1em  .7em  auto auto ;
    background: none ;
    font-weight: bold ;
    outline:  none ;

    option {
        background-color:  #333;
    }
`
