import React from 'react'
import styled from "styled-components"

type barProps = {
    height:number;
    isSorted: boolean;
    isActive: boolean;
    isSwapped: boolean;
    doneSorting:  boolean ;
}

const StyledBar= styled.div<barProps>`
    height: ${props => props.height +  "vh"} ; 
    background-color: ${ props => props.doneSorting ? "pink" : props.isSorted ? "pink": props.isSwapped ?  "green" : props.isActive ? "yellow":  "red"};
    width:0.5em ;
    flex: 1;
    position:relative;
    border:none ;
    border-radius:15px;
`

export default function Bar({height,isActive, isSorted, doneSorting,isSwapped }: barProps){

    return (<StyledBar height={height} isActive={isActive} isSorted={isSorted} doneSorting={doneSorting} isSwapped={isSwapped}>
            </StyledBar>)
}

