import React, {useState} from "react"
import {useDispatch} from "react-redux"
import styled from "styled-components"
import { INITIAL_ARRAY_SIZE } from "../redux/features/sortSlice"

import {updateBarsCount} from "../redux/features/sortSlice"

export default function Header () {
   
    const  [barsCount,setBarsCount] = useState(INITIAL_ARRAY_SIZE.toString())
    const  dispatch = useDispatch()
    
    const handleBarWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       dispatch(updateBarsCount(parseInt(e.target.value))) 
       setBarsCount(e.target.value) 
    }

    return ( <StyledHeader>
        <div className="logo">
           <h1> Magical Sorting Bars</h1>
        </div>
        <div className="controls">
            <div className="control-group">
                <label htmlFor="bars-adjust">Adjust Bars</label>    
                <input value={barsCount} name="bars-adjust"  onChange={handleBarWidthChange} type="range" min={10}  max={80} />
            </div>
        </div>
            </StyledHeader>)
}

const StyledHeader = styled.header`
    display:flex ;
    color: #ddd; 
    padding: 1em ;
    margin: 0; 
    width:100vw ; 
    background-color: var(--clr-dark2);

    .logo{
        letter-spacing:  2px ;
        text-indent:  1.5em ;
    }
    .controls {
        margin-left: auto ;
        padding: 0.5em 1em ;
    }

    .control-group {
        display: flex ;
        align-items:center;
        column-gap:0.5em ;
    }
    label {
        font-weight: 900 ;

    }
`
