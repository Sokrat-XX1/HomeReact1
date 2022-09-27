import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('123')

    
    function increment(){
        setCount (count + 1);
        console.log(count + 1);
    }

    function decrement(){
        setCount (count - 1)
        console.log(decrement);
    }

    // alert(value)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {/* <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/> */}
            
        </div>
    );
}

export default Counter;