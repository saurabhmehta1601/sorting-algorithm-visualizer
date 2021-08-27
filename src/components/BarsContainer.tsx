import React from "react"
import styled from "styled-components"
import Bar from "./Bar"

export default function BarsContainer(){
    return (<StyledBarsContainer>
        <Bar  height={400} bgColor="pink"/>        
        <Bar  height={200} bgColor="yellow"/>        
        <Bar  height={200} bgColor="green"/>        
    </StyledBarsContainer>)
}






const StyledBarsContainer = styled.div`
    display:flex ;
    padding: 1em ;
    align-items:flex-end;
`
