import styled from "styled-components"
import Slider from "react-rangeslider"
import  { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import {increaseCurrentStepIndex,decreaseCurrentStepIndex,setRunningState} from "../redux/features/sortSlice"
import useInterval from "../hooks/useInterval"
import 'react-rangeslider/lib/index.css'
import ReactTooltip from "react-tooltip"

const INTIAL_SORTING_SPEED = 200
const  MIN_SORTING_SPEED = 10 
const  MAX_SORTING_SPEED = 700 


export default function  PlaybackControls(){

    const [delay,setDelay] = useState(MAX_SORTING_SPEED - INTIAL_SORTING_SPEED)
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
    }, MAX_SORTING_SPEED - delay)
    

    return (<StyledControl>
        <div className="playback-controls">
           
            {/*   Move backward button  */}
            <p data-tip="Move one step backward"  data-type="info">
               <button  onClick={handleMovePrevStep}><i className={`fas fa-backward ${(isRunning ||  currentStepIndex === 0) && "disabled"}`}></i></button> 
            </p>
            <ReactTooltip />

            {/*   pause/unpause button  */}
            <p data-tip={isRunning ? "pause": "unpause"} data-type="info">
                <button  onClick={togglePlayState}><i className={isRunning ? "fas fa-pause-circle": "fas fa-play-circle"}></i></button>
            </p>
            <ReactTooltip />

            {/*   Move forward button  */}
            <p data-tip="Move one step forward"  data-type="info">
               <button  onClick={handleMoveNextStep}><i className={`fas fa-forward ${(isRunning || currentStepIndex === sortingSteps.length - 1) && "disabled"}`}></i></button> 
            </p>
            <ReactTooltip />

        </div>
        <div className="slider">
            <div data-tip="Adjust sorting animation speed" data-type="info">
                <Slider value={delay}  tooltip={false} min={MIN_SORTING_SPEED} max={MAX_SORTING_SPEED} onChange={(value) => setDelay(value)}/>
            </div>
            <ReactTooltip />
        </div>
            </StyledControl>)
}

const StyledControl= styled.div`
    
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
        display: flex;
        justify-content: space-around;
        width:30vw ;
        margin: 4vh auto 2vh; 
    }
    
    .slider{
        display: block; 
        width:min(60vw, 540px);
        margin: auto;
    }

    .rangeslider-horizontal .rangeslider__fill {
        background: transparent ; 
    }
`
