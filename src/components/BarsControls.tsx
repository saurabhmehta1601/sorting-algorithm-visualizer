import  React from "react"
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import  ReactTooltip from "react-tooltip"
import  {restartSort, regenerateBars, updateAlgo} from  "../redux/features/sortSlice"
import {RootState} from "../redux/store"
import algos,{algoType} from "../utils/algos"


export default function BarsControls(){
    const dispatch  = useDispatch()
    const  currentAlgo = useSelector((state: RootState)=> state.sort.algorithm)

    const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => { 
        const selectedAlgo =  e.target.value 
        const allAlgos = algos.map((algo) => algo.value) 

        if(allAlgos.includes(selectedAlgo as algoType) ){
            dispatch(updateAlgo(selectedAlgo as algoType))
        }
    }

    return  (
        <Controls>
            <div className="bars-state-controls">
                <button onClick={() => dispatch(restartSort())}>
                    <p data-tip="click to  restart the bars sorting from beginning" data-type="info">RESTART  SORT </p>
                    <ReactTooltip />
                </button>
                <button onClick={() => dispatch(regenerateBars())}>
                    <p data-tip="click to regenerate different bars group" data-type="info" >REGENERATE BARS</p>
                    <ReactTooltip />
                </button>
            </div>

            <div className="algo-selector"  >
                <select onChange={handleChange} >
                    {algos.map((algo,idx)  => <option key={idx} disabled={algo.value === currentAlgo} value={algo.value}>{algo.name}</option>)} 
                </select>
            </div>
            
        </Controls>
    )
}


const Controls =  styled.div`
    display: flex ;
    align-items:center ;

    .bars-state-controls{
        padding:  1em  ; 
        display:  flex ;
        column-gap:  0.5em ;

        button {
            border: none ;
            padding:  0.4em  0.9em ;
            border-radius:  4px;        
            background-color: blue;
            color:  white;
            font-size:  1rem ;
            font-weight:  700 ;

            i{
                color: wheat;
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

    } 
`

