import  React from "react"
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import  ReactTooltip from "react-tooltip"
import  {restartSort, regenerateBars, updateAlgo} from  "../redux/features/sortSlice"
import {RootState} from "../redux/store"
import algos from "../utils/algos"

export default function BarsControls(){
    const dispatch  = useDispatch()
    const  {algorithm: currentAlgo,  isRunning}= useSelector((state: RootState)=> state.sort)

    const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => { 
            dispatch(updateAlgo(e.target.value))
    }

    return  (
        <Controls>
            <div className="bars-state-controls">
                <button onClick={() => dispatch(restartSort())}>
                    <p data-tip="click to  restart the bars sorting from beginning"  data-type="info">RESTART  SORT </p>
                    <ReactTooltip />
                </button>
                <button onClick={() => dispatch(regenerateBars())}>
                    <p data-tip="click to regenerate different bars group" data-type="info" >REGENERATE BARS</p>
                    <ReactTooltip />
                </button>
            </div>

            <div data-tip={isRunning ? "Stop animation before selecting algorithm" : "Select sorting algorithm (Bars will be regenerated)"} data-type="info" className="algo-selector"  >
                <select onChange={handleChange} value={currentAlgo} disabled={isRunning }>
                    {algos.map((algo,idx)  => <option key={idx} disabled={algo.value === currentAlgo} value={algo.value}>{algo.name}</option>)} 
                </select>
            </div>
           <ReactTooltip /> 
        </Controls>
    )
}

const Controls =  styled.div`
    display: flex ;
    align-items:center ;

    .bars-state-controls{
        padding:  1em  3em ; 
        display:  flex ;
        column-gap:  1em ;

        button {
            border: none ;
            padding:  0.4em  0.9em ;
            border-radius:  4px;        
            font-size:  1rem ;
            font-weight:  700 ;

            i{
                font-size: 1.4rem ;
            }

            &:hover,&:active{
                cursor: pointer ;
                .disabled {
                    cursor: not-allowed;
                }
            }
            
            .disabled{
                opacity: 0.5; 
            }
        }
    }

    .algo-selector{
        margin-left:   auto ;
        padding:  1em  2em  ; 

        select {
            word-spacing:4px;
            padding: 0.225em; 
            font-size:  1rem ;
            border: none ;
            color: var(--clr-light1) ;
            background: none ;
            font-weight: bold ;
            outline:  none ;
        }
        option {
            padding: 0.225em; 
            background-color:  var(--clr-dark1);
        }
    } 
`

