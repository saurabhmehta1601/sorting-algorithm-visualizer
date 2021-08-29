import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../redux/store"
import Bar from "./Bar"

export default function BarsContainer(){
const { currentStepIndex,sortingSteps }= useSelector((state : RootState) => state.sort)
console.log(sortingSteps[0].arrayState.length)

    return (<StyledBarsContainer>
        {sortingSteps[currentStepIndex].arrayState.map((h,idx) => {
           return <Bar 
            key={idx} 
            height={h} 
            isActive={sortingSteps[currentStepIndex].iteratingElementIndex === idx}  
           />
        })}
    </StyledBarsContainer>)
}

const StyledBarsContainer = styled.div`
    display:flex ;
    height: 60vh;
    width:  min(92vw, 980px) ;
    margin:  0  auto;
    column-gap:0.225em;
    justify-content:center; 
    align-items:flex-end;
`
