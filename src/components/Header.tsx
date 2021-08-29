import React, {useState} from "react"
import {useDispatch} from "react-redux"
import styled from "styled-components"

import {updateBarsCount} from "../redux/features/sortSlice"

export default function Header () {
   
    const  [barsCount,setBarsCount] = useState("10")
    const  dispatch = useDispatch()
    
    const handleBarWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       dispatch(updateBarsCount(parseInt(e.target.value))) 
       setBarsCount(e.target.value) 
    }

    return ( <StyledHeader>
        <div className="logo">
           <h1> Sorting Visualizer </h1>
        </div>
        <div className="controls">
            <div className="control-group">
                <label htmlFor="bars-adjust">Adjust bars</label>    
                <input value={barsCount} name="bars-adjust"  onChange={handleBarWidthChange} type="range" min={10}  max={100} />
            </div>
        </div>
            </StyledHeader>)
}

const StyledHeader = styled.header`
    display:flex ;
    background-color: #333 ;
    color: #ddd; 
    padding: 1em ;
    margin: 0; 
    width:100vw ; 

    .logo{
        letter-spacing:  2px ;
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
`
