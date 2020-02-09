import React, { useState, useEffect } from 'react'
import styled from 'styled-components';



const Button = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export default function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);
    console.log('count', count);
    console.log('count2', count2);

    // useEffect is the conbination of component DidMount, DidUpdate, and WillMount
    useEffect(() => {
        console.log('effected called')
        document.title = `count is ${count}`
        
        return () => {
            // called when component unMounts
        };
    },[count])

    function increaseCounter() {
        if (count2 % 2 === 1) {
            setCount( prevCount => prevCount + 2)
        }
        setCount2( prevCount => prevCount -1)
    }
    
    return (
        <div>
        
            <h1> count this number {count} || {count2} </h1>
    
            <Button onClick={increaseCounter }> Click increment</Button>
        </div>
    )
}

// Before
// <Button onClick={() => setCount(count +1) }> Click</Button>
// After
//  <Button onClick={increaseCounter }> Click</Button>