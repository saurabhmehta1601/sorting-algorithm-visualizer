import React from "react"
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"

export default function AlgoSelector(){
    const dispatch  = useDispatch()
    const  state = useSelector(state => state)
    const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => { console.log("changed") }

    return  (
        <StyledAlgoSelector  >
            <select onChange={handleChange}>
                <option value="BubbleSort">Bubble Sort</option>
                <option value="SelectionSort">SelectionSort</option>
                <option value="MergeSort">MergeSort</option>
            </select>
        </StyledAlgoSelector>
    )
}


const  StyledAlgoSelector =  styled.div`

    text-align: right ;
    padding:  1em  2em  ; 

    select {
        word-spacing:4px;
        color:#eee;
        font-size:  1rem ;
        border: none ;
        background: none ;
        font-weight: bold ;
        outline:  none ;
    }
    option {
        background-color:  #333;
    }
`
