import React from 'react'
import styled from "styled-components"

type barProps = {
    height:number;
    isSorted: boolean;
    isActive: boolean;
    isSwapped: boolean;
    doneSorting:  boolean ;
}

/*
Coloring strategy --
 * Current Iterating Element is YELLOW
 * During algorithm if element gets swapped it turns GREEN if it doesn't get swapped again instantly it loses GREEN color
 * Sorted Elements are turned PINK
 * If sorting algorithm ends then all elements are turned PINK
*/
const StyledBar= styled.div<barProps>`
    height: ${props => props.height +  "vh"} ; 
    background-color: ${ props => props.doneSorting ? "var(--clr-pink)" : props.isSorted ? "var(--clr-pink)": props.isSwapped ?  "var(--clr-green)" : props.isActive ? "var(--clr-yellow)":  "var(--clr-red)"};
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

