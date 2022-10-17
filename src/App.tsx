import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Counter/Settings/Settings";

function App() {
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    let [valueSetting, setValueSetting] = useState(0)  /**
     *  можно ли избавиться от этого стейта так чтобы при измененении старт вэлью не менялось сразу значение в счетчике
     */

    // где лучше создавать этот хук

    useEffect(() => {
        localStorage.setItem(`maxValue`, JSON.stringify(maxValue))
    }, [maxValue])


    useEffect(() => {
        let maxItemStorage = localStorage.getItem(`maxValue`)
        if (maxItemStorage) {
            console.log('true') /// работатет
            setMaxValue(JSON.parse(maxItemStorage))
        }
    }, [])


    const increaseValue = () => {
        startValue++;
        setStartValue(startValue)
    }

    const resetValue = () => {
        setStartValue(0)
    }

    const changeError = () => {
        if (startValue >= maxValue) {
            setError(!error)
        }
    }

    const changeMaxValue = (num: number) => {
        setMaxValue(num)
    }


    const changeStartValue = (num: number) => {
        setValueSetting(num)
    }

    const setStartValueSettings = () => {
        setStartValue(valueSetting)
        console.log(localStorage.getItem('maxValue')) // тест локала все работает в таком виде
    }

    return (
        <div className='wrapperApp'>
            <Settings changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} maxValue={maxValue}
                      setStartValueSettings={setStartValueSettings} valueSetting={valueSetting}/>
            <Counter startValue={startValue} increaseValue={increaseValue} resetValue={resetValue}
                     changeError={changeError} maxValue={maxValue} value={valueSetting}/>
        </div>

    );
}

export default App;
