import React from 'react'
import styled from "styled-components"

type barProps = {
    height:number;
    bgColor: string;
}

const StyledBar= styled.div<barProps>`
    border: 2px solid black ;
    height: ${props => props.height}px ; 
    background-color: ${props => props.bgColor};
    width: 50px ; 
`

export default StyledBar
