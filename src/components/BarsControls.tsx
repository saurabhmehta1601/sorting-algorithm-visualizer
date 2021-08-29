import React from "react"
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import  ReactTooltip from "react-tooltip"
import  {restartSort, regenerateBars} from  "../redux/features/sortSlice"


export default function BarsControls(){
    const dispatch  = useDispatch()
    const  state = useSelector(state => state)
    const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => { console.log("changed") }

    return  (
        <Controls>
            <div className="bars-state-controls">
                <button onClick={() => dispatch(restartSort())}>
                    <p data-tip="click to  restart the bars sorting from beginning">RESTART  SORT </p>
                    <ReactTooltip />
                </button>
                <button onClick={() => dispatch(regenerateBars())}>
                    <p data-tip="click to regenerate different bars group">REGENERATE BARS</p>
                    <ReactTooltip />
                </button>
            </div>

            <div className="algo-selector"  >
                <select onChange={handleChange}>
                    <option value="BubbleSort">Bubble Sort</option>
                    <option value="SelectionSort">SelectionSort</option>
                    <option value="MergeSort">MergeSort</option>
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

