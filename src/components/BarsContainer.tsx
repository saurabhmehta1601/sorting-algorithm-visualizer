import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../redux/store"
import Bar from "./Bar"

export default function BarsContainer(){
const { currentStepIndex,sortingSteps }= useSelector((state : RootState) => state.sort)
console.log(sortingSteps);

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
    padding: 4em 1em 1.4em 1em ;
    column-gap:4px ;
    justify-content:center; 
    align-items:flex-end;
`
