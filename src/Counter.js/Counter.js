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
    console.log('count', count);

    // useEffect is the conbination of component DidMount, DidUpdate, and WillMount
    useEffect(() => {
        console.log('effected called')
        document.title = `counter is ${count}`
        
        // return () => {
        //     cleanup
        // };
    })
    
    return (
        <div>
        
            <h1> count this number {count} </h1>
            <Button onClick={() => setCount(count +1) }> Click</Button>
        </div>
    )
}