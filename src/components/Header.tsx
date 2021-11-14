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
            {/* App logo */}
        <div className="logo">
           <h1> Magical Sorting Bars</h1>
        </div>
            {/* Bar count control slider */}
        <div className="controls">
            <div className="control-group">
                <label htmlFor="bars-adjust">Adjust Bars</label>    
                <input value={barsCount} name="bars-adjust"  onChange={handleBarWidthChange} type="range" min={10}  max={80} />
            </div>
        </div>
            </StyledHeader>)
}

const StyledHeader = styled.header`
    color: #ddd; 
    padding: 1em ;
    margin: 0; 
    display:flex ;
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
        justify-content:center;
        align-items:center;
        column-gap:1.5em ;
    }
    label {
        font-weight: 900 ;

    }
    @media (max-width:768px){
        display:block  ;
        text-align:center ;
        background-color: var(--clr-dark1) ;
    }
`
