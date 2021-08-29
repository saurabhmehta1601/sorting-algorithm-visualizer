import 'react-rangeslider/lib/index.css'
import styled from "styled-components"
import Slider from "react-rangeslider"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import {increateCurrentStepIndex,decreaseCurrentStepIndex,setRunningState} from "../redux/features/sortSlice"
import useInterval from "../hooks/useInterval"


const INTIAL_SORTING_SPEED = 200
const  MIN_SORTING_SPEED =  100
const  MAX_SORTING_SPEED = 700 


export default function  PlaybackControls(){

    const [speed,setSpeed] = useState(INTIAL_SORTING_SPEED)
    const {isRunning,currentStepIndex,sortingSteps} = useSelector((state: RootState) =>  state.sort)
    const dispatch = useDispatch()

    const moveNextStep = () => { dispatch(increateCurrentStepIndex())}
    const movePrevStep = () => {dispatch(decreaseCurrentStepIndex())}
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
        <div>
           <a href="#" onClick={movePrevStep}><i className="fas fa-backward"></i></a> 
            <a href="#" onClick={togglePlayState}><i className={isRunning ? "fas fa-pause-circle": "fas fa-play-circle"}></i></a>
           <a href="#" onClick={moveNextStep}><i className="fas fa-forward"></i></a> 
        </div>
        <div className="slider">
            <Slider value={speed} reverse={true} tooltip={false} min={MIN_SORTING_SPEED} max={MAX_SORTING_SPEED} onChange={(value) => setSpeed(value)}/>
        </div>
            </StyledControl>)
}

const StyledControl= styled.div`
    
    margin-top:  2vh ;

    div{
        display: flex;
        justify-content: space-around;
    }
    i{
        color: wheat;
        font-size: 1.9rem ;
    }
    .slider{
        display: block; 
        width:60vw;
        margin: auto ;
    }
    .rangeslider-horizontal .rangeslider__fill {
        background: transparent ; 
    }
`
