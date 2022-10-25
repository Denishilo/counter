import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Counter/Settings/Settings";
import {Counter2} from "./Components/Counter2/Counter2";


function App() {

    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [valueSetting, setValueSetting] = useState<number>(0)
    let [changeInput, setChangeInput] = useState<boolean>(false)
    let [isSettings, setSettings] = useState<boolean>(false)

    useEffect(() => {
        let maxItemStorage = localStorage.getItem(`maxValue`)
        if (maxItemStorage) {
            setMaxValue(JSON.parse(maxItemStorage))
        }

        let startItemStorage = localStorage.getItem('startValue')
        if (startItemStorage) {
            setValueSetting(JSON.parse(startItemStorage))
            setStartValue(JSON.parse(startItemStorage))
        }

    }, [])

    const increaseValue = () => {
        startValue++;
        setStartValue(startValue)
    }

    const resetValue = () => {
        setStartValue(valueSetting)
    }

    const changeMaxValue = (num: number) => {
        setMaxValue(num)
        setChangeInput(true)
    }

    const changeStartValue = (num: number) => {
        setValueSetting(num)
        setChangeInput(true)
    }

    const setLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(valueSetting))
    }

    const setStartValueSettings = () => {
        setStartValue(valueSetting)
        setLocalStorage();
        setChangeInput(false)
    }

    const openClosedSettings = () => {
        if(!isSettings){
            setSettings(!isSettings)
        } else {
            setStartValue(valueSetting)
            setLocalStorage();
            setChangeInput(false)
            setSettings(!isSettings)
        }

    }

    return (
        <div className='wrapperApp'>
            <Settings changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} maxValue={maxValue}
                      setStartValueSettings={setStartValueSettings} valueSetting={valueSetting}/>
            <Counter startValue={startValue} increaseValue={increaseValue} resetValue={resetValue}
                     maxValue={maxValue} valueSetting={valueSetting} changeInput={changeInput}/>
            <Counter2 maxValue={maxValue} startValue={startValue} increaseValue={increaseValue} resetValue={resetValue}
                      valueSetting={valueSetting} changeInput={changeInput} openClosedSettings={openClosedSettings} isSettings={isSettings}
                      changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}
            />
        </div>
    );
}

export default App;
