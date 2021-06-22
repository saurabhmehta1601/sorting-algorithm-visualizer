import React, { useState } from 'react'
import { getRandomArray } from '../../utils/getRandomArray'

const index = () => {
    const [width, setwidth] = useState(5)
    const bars = getRandomArray(100,50,730)
    return (
        <div>
            Visualizer
        </div>
    )
}

export default index
