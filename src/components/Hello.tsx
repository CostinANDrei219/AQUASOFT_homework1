//Showcase of useState and useRef in a simple React component

import React, { useState, useRef } from 'react'

export default function Hello() {
    const [car, setCar] = useState('BMW')
    const inputRef = useRef<HTMLInputElement | null>(null)

    const changeCar = () => {
        const val = inputRef.current.value
        if(typeof val === 'string')
        {
            setCar(val)
        }
            
    }

    return (
        <div >
            <h2>My favorite car is: {car}</h2>
            <input ref={inputRef} type="text" placeholder="Enter a car" />
            <button onClick={changeCar} style={{ marginLeft: 8 }}>
                Change Car
            </button>
        </div>
    )
}

