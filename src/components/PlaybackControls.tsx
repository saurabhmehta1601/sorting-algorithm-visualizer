import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../redux/store"
import {increateCurrentStepIndex,decreaseCurrentStepIndex,setRunningState} from "../redux/features/sortSlice"

export default function  PlaybackControls(){

    const {isRunning} = useSelector((state: RootState) =>  state.sort)
    const dispatch = useDispatch()

    const moveNextStep = () => {dispatch(increateCurrentStepIndex())}
    const movePrevStep = () => {dispatch(decreaseCurrentStepIndex())}

    const togglePlayState = () => {dispatch(setRunningState(!isRunning))}    
    return (<StyledControl>
           <a href="#" onClick={movePrevStep}><i className="fas fa-backward"></i></a> 
            <a href="#" onClick={togglePlayState}><i className={isRunning ? "fas fa-pause-circle": "fas fa-play-circle"}></i></a>
           <a href="#" onClick={moveNextStep}><i className="fas fa-forward"></i></a> 
            </StyledControl>)
}

const StyledControl= styled.div`
    display: flex;
    justify-content: space-around;
    
    i{
        color: wheat;
        font-size: 1.4rem ;
    }
`
