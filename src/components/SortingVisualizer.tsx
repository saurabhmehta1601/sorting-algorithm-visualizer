import React, { useState } from 'react'
import { getRandomArray } from '../utils/getRandomArray'
import styled from "styled-components"

const index = () => {
    const [width, setwidth] = useState(5)
    const bars = getRandomArray(100,50,730)
    return (
        <Container>
            <Bar></Bar> 
        </Container>
    )
}

const Container = styled.div`
    display:flex ;
    
`

const Bar = styled.div`
width:20px;
height:200px;
background-color: red;
`

export default index
