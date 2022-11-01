import React, {useState} from "react"
import {useDispatch} from "react-redux"
import styled from "styled-components"
import { INITIAL_ARRAY_SIZE } from "../redux/features/sortSlice"
import {updateBarsCount} from "../redux/features/sortSlice"
import {HOME_PAGE_TITLE} from "../constants/HomePage"

export default function Header () {
   
    const  [barsCount,setBarsCount] = useState(INITIAL_ARRAY_SIZE.toString())
    const  dispatch = useDispatch()
    
    const handleBarWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       dispatch(updateBarsCount(parseInt(e.target.value))) 
       setBarsCount(e.target.value) 
    }

    return ( <StyledHeader >
            {/* App logo */}
        <div className="logo" data-testid="logo" >
           <h1> {HOME_PAGE_TITLE} </h1>
           <div className="github-icon show-in-sm">
                <a target="_blank" href="https://github.com/saurabhmehta1601/sorting-algorithm-visualizer">
                    <i className="fa-brands fa-github"></i>
                </a>
           </div>
        </div>
            {/* Bar count control slider */}
        <div className="controls" data-testid='controls' >
            <div className="control-group">
                <label htmlFor="bars-adjust">Adjust Bars</label>    
                <input value={barsCount} name="bars-adjust"  onChange={handleBarWidthChange} type="range" min={10}  max={80} />
            </div>
        </div>
        <div className="github-icon show-in-lg">
                <a target="_blank" href="https://github.com/saurabhmehta1601/sorting-algorithm-visualizer">
                    <i className="fa-brands fa-github"></i>
                </a>
         </div>
            </StyledHeader>)
}

const StyledHeader = styled.header`
    color: #ddd; 
    padding: 1em ;
    margin: 0; 
    display:flex ;
    align-items:center ;
    width:100vw ; 
    background-color: var(--clr-dark1) ;

    .logo{
        letter-spacing:  2px ;
        padding: 1em ;
        display: flex; 
        justify-content: space-between;
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
    .github-icon{
        margin-right: 12px;
        a {
            position: relative; 
            display: block;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background: #333;
            border-radius: 50%;
            font-size: 30px;
            color: #666;
            transition: .5s;

            &:hover {
                color: #ffee10;
                box-shadow: 0 0 5px #ffee10;
                text-shadow: 0 0 5px #ffee10;
            }
        }
    }
    .show-in-sm{
        display:none;
    }
    .show-in-lg{
        display:block;
    }

    @media (max-width:768px){
        display:block  ;
        text-align:center ;
        .show-in-sm{
            display:block;
        }
        .show-in-lg{
            display:none;
        }
    }
`
