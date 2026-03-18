//Showcase of useState and useRef in a simple React component

import React, { useState, useRef } from 'react'

export default function Hello() {
    const [car, setCar] = useState('BMW')
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChange = () => {
        const val = inputRef.current?.value
        if (val) setCar(val)
    }

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', padding: 16 }}>
            <h2>My favorite car is: {car}</h2>
            <input ref={inputRef} type="text" placeholder="Enter a car" />
            <button onClick={handleChange} style={{ marginLeft: 8 }}>
                Change Car
            </button>
        </div>
    )
}

