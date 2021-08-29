import React from 'react'
import styled from "styled-components"

type barProps = {
    height:number;
    isActive: boolean;
}

const StyledBar= styled.div<barProps>`
    height: ${props => props.height +  "vh"} ; 
    background-color: ${props => props.isActive ? "yellow": "red"};
    width:0.5em ;
    flex: 1;

    h4 {
        font-size:1.125rem;
        font-style:bold;
        transform:rotateZ(-90deg);
    }
`

export default function Bar({height,isActive}: barProps){
    return (<StyledBar height={height} isActive={isActive}>
            </StyledBar>)
}

