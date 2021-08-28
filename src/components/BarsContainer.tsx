import React, {useRef, useState} from "react"
import styled from "styled-components"
import Bar from "./Bar"

import {getRandomArray}  from "../utils/getRandomArray"
import BubbleSort from "../algorithms/BubbleSort"

export default function BarsContainer(){
    //const  heights= getRandomArray(3,5,60)
    const  [heights,setHeights] = useState(getRandomArray(3,3,60))
   const currentStep =  useRef(0)
   const stepsData =  useRef(BubbleSort(heights))
   console.log(stepsData)
    return (<StyledBarsContainer>
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
