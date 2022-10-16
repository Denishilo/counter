import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {

    let [value, setValue] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    const increaseValue = () => {
        value++;
        setValue(value)
    }

    const resetValue = () => {
        setValue(0)
    }

    const changeError = () => {
        if (value === 5) {
            setError(!error)
        }
    }

    return (
        <div className='wrapperApp'>
            <Settings/>
            <Counter value={value} increaseValue={increaseValue} resetValue={resetValue} changeError={changeError}/>
        </div>

    );
}

export default App;
