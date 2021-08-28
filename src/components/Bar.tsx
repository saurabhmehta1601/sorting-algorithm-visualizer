import React from 'react'
import styled from "styled-components"

type barProps = {
    height:number;
    bgColor: string;
}

const StyledBar= styled.div<barProps>`
    border: 2px solid black ;
    height: ${props => props.height +  "vh"} ; 
    background-color: ${props => props.bgColor};
    width: 40px ; 
    display:grid;
    place-items:center;

    h4 {
        font-size:1.125rem;
        font-style:bold;
        transform:rotateZ(-90deg);
    }
`

export default function Bar({height,bgColor}: barProps){
    return (<StyledBar height={height} bgColor={bgColor}>
        <h4><b>{height.toString()}</b></h4> 
            </StyledBar>)
}

