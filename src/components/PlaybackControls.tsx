import styled from "styled-components"
import Slider from "react-rangeslider"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import {increaseCurrentStepIndex,decreaseCurrentStepIndex,setRunningState} from "../redux/features/sortSlice"
import useInterval from "../hooks/useInterval"
import 'react-rangeslider/lib/index.css'


const INTIAL_SORTING_SPEED = 200
const  MIN_SORTING_SPEED =  100
const  MAX_SORTING_SPEED = 700 


export default function  PlaybackControls(){

    const [speed,setSpeed] = useState(INTIAL_SORTING_SPEED)
    const {isRunning,currentStepIndex,sortingSteps} = useSelector((state: RootState) =>  state.sort)
    const dispatch = useDispatch()

    const moveNextStep = () => { dispatch(increaseCurrentStepIndex())  }
    const movePrevStep = () => { dispatch(decreaseCurrentStepIndex())  }

    const handleMovePrevStep =  () =>  { if(!isRunning){ movePrevStep() } }
    const handleMoveNextStep =  () =>  { if(!isRunning){ moveNextStep() } }

    const togglePlayState = () => { dispatch(setRunningState(!isRunning)) }
        
    const myInterval = useInterval(()=>{
        if(isRunning){
            moveNextStep()
            if(currentStepIndex === sortingSteps.length - 1){
               dispatch(setRunningState(false)) 
            }
        }else{
            if(myInterval){
                myInterval()
            }
        }
    }, speed)
    

    return (<StyledControl>
        <div className="playback-controls">
           <button  onClick={handleMovePrevStep}><i className={`fas fa-backward ${(isRunning ||  currentStepIndex === 0) && "disabled"}`}></i></button> 
            <button  onClick={togglePlayState}><i className={isRunning ? "fas fa-pause-circle": "fas fa-play-circle"}></i></button>
           <button  onClick={handleMoveNextStep}><i className={`fas fa-forward ${(isRunning || currentStepIndex === sortingSteps.length - 1) && "disabled"}`}></i></button> 
        </div>
        <div className="slider">
            <Slider value={speed} reverse={true} tooltip={false} min={MIN_SORTING_SPEED} max={MAX_SORTING_SPEED} onChange={(value) => setSpeed(value)}/>
        </div>
            </StyledControl>)
}

const StyledControl= styled.div`
    
    div{
        display: flex;
        justify-content: space-around;
    }

    button {
        background: none ;
        border: none ;
        outline: none ;

        i{
            color: wheat;
            font-size: 1.9rem ;
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

    .playback-controls{
        width:30vw ;
        margin: 4vh auto 2vh; 
    }
    
    .slider{
        display: block; 
        width:min(60vw, 540px);
        margin: auto ;
    }

    .rangeslider-horizontal .rangeslider__fill {
        background: transparent ; 
    }
`
