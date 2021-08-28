import React from "react"
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"



export default function AlgoSelector(){
    const dispatch  = useDispatch()
    const  state = useSelector(state => state)
    const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => { console.log("changed") }

    return  (
        <StyledAlgoSelector  onChange={handleChange}>
            <option value="BubbleSort">Bubble Sort</option>
            <option value="SelectionSort">SelectionSort</option>
            <option value="MergeSort">MergeSort</option>
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
