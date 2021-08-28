import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../redux/store"
import {increateCurrentStepIndex,decreaseCurrentStepIndex,setRunningState} from "../redux/features/sortSlice"
import Slider from "react-rangeslider"
import 'react-rangeslider/lib/index.css'
import useInterval from "../hooks/useInterval"

export default function  PlaybackControls(){

    const [speed,setSpeed] = useState(100)
    const {isRunning} = useSelector((state: RootState) =>  state.sort)
    const dispatch = useDispatch()

    const moveNextStep = () => { dispatch(increateCurrentStepIndex())}
    const movePrevStep = () => {dispatch(decreaseCurrentStepIndex())}
    const togglePlayState = () => { dispatch(setRunningState(!isRunning)) }
        
    const myInterval = useInterval(()=>{
        if(isRunning){
            moveNextStep()
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
            <Slider value={speed} reverse={true} tooltip={false} min={50} max={1000} onChange={(value) => setSpeed(value)}/>
        </div>
            </StyledControl>)
}

const StyledControl= styled.div`
    
    div{
        display: flex;
        justify-content: space-around;
    }
    i{
        color: wheat;
        font-size: 1.4rem ;
    }
    .slider{
        display: block; 
        width:40vw;
        margin: auto ;
    }
    .rangeslider-horizontal .rangeslider__fill {
        background: transparent ; 
    }
`
