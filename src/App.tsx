import React, {useEffect, useReducer} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Counter/Settings/Settings";
import {Counter2} from "./Components/Counter2/Counter2";
import {
    changeMaxValueAC,
    changeStartValueAC,
    increaseValueAC, openClosedSettingsAC,
    Reducer,
    resetValueAC, setMaxValueFromLocalStorageAC, setStartValueFromLocalStorageAC,
    setStartValueSettingsAC, setValueSettingsFromLocalStorageAC
} from "./State/Reducer";

function App() {

    const stateValues = {
        maxValue: 1,
        startValue: 0,
        valueSetting: 0,
        changeInput: false,
        isSettings: false,
    }

    const [state, dispatch] = useReducer(Reducer, stateValues)

    useEffect(() => {
        let maxItemStorage = localStorage.getItem(`maxValue`)
        if (maxItemStorage) {
            let maxValue = JSON.parse(maxItemStorage)
            dispatch(setMaxValueFromLocalStorageAC(maxValue))
        }

        let startItemStorage = localStorage.getItem('startValue')
        if (startItemStorage) {
            let valueSettings = JSON.parse(startItemStorage)
            dispatch(setValueSettingsFromLocalStorageAC(valueSettings))
        }

        let currentItemStorage = localStorage.getItem('currentValue')
        if (currentItemStorage) {
            let startValue = JSON.parse(currentItemStorage)
            dispatch(setStartValueFromLocalStorageAC(startValue))
        }
    }, [])

    const increaseValue = () => {
        dispatch(increaseValueAC()) // localStorage.setItem('currentValue')
    }

    const resetValue = () => {
        dispatch(resetValueAC())
    }

    const changeMaxValue = (num: number) => {
        dispatch(changeMaxValueAC(num))
    }

    const changeStartValue = (num: number) => {
        dispatch(changeStartValueAC(num))
    }

    // const setLocalStorage = () => {
    //     localStorage.setItem('maxValue', JSON.stringify(state.maxValue));
    //     localStorage.setItem('startValue', JSON.stringify(state.valueSetting))
    // }

    const setStartValueSettings = () => {
        dispatch(setStartValueSettingsAC()) // localStorage.setItem('maxValue') and localStorage.setItem('startValue')
    }

    const openClosedSettings = () => {
        dispatch(openClosedSettingsAC())  // localStorage.setItem('maxValue') and localStorage.setItem('startValue')
    }

    return (
        <div className='wrapperApp'>
            <Settings changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} maxValue={state.maxValue}
                      setStartValueSettings={setStartValueSettings} valueSetting={state.valueSetting}/>
            <Counter startValue={state.startValue} increaseValue={increaseValue} resetValue={resetValue}
                     maxValue={state.maxValue} valueSetting={state.valueSetting} changeInput={state.changeInput}/>
            <Counter2 maxValue={state.maxValue} startValue={state.startValue} increaseValue={increaseValue}
                      resetValue={resetValue}
                      valueSetting={state.valueSetting} changeInput={state.changeInput}
                      openClosedSettings={openClosedSettings} isSettings={state.isSettings}
                      changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}
            />
        </div>
    );
}

export default App;
