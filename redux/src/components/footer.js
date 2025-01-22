import React from 'react'
import { useSelector } from 'react-redux'


export default function Footer() {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>Footer Count {count}</div>
    )
    
    
}