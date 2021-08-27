import React from "react"
import styled from "styled-components"
import Bar from "./Bar"

import {getRandomArray}  from "../utils/getRandomArray"

export default function BarsContainer(){
    const  randomArray= getRandomArray(10,5,60)
    const  heights = randomArray.map(height => height + "vh")

    return (<StyledBarsContainer>
        <div>
        </div>
        {heights.map(( h,idx) => <Bar key={idx} height={h} bgColor="#ddd" /> ) }
    </StyledBarsContainer>)
}

const StyledBarsContainer = styled.div`
    display:flex ;
    padding: 4em 1em 1.4em 1em ;
    column-gap:4px ;
    justify-content:center; 
    align-items:flex-end;
`
