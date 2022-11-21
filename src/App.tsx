import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Counter/Settings/Settings";
import {Counter2} from "./Components/Counter2/Counter2";
import {
    changeMaxValueAC,
    changeStartValueAC,
    increaseValueAC, InitialStateType, openClosedSettingsAC,
    resetValueAC, setMaxValueFromLocalStorageAC, setStartValueFromLocalStorageAC,
    setStartValueSettingsAC, setValueSettingsFromLocalStorageAC
} from "./State/Reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./State/store";

function App() {
    let maxValue = useSelector<RootReducerType, number>(state => state.counterReducer.maxValue)
    let startValue = useSelector<RootReducerType, number>(state => state.counterReducer.startValue)
    let valueSetting = useSelector<RootReducerType, number>(state => state.counterReducer.valueSetting)
    let changeInput = useSelector<RootReducerType, boolean>(state => state.counterReducer.changeInput)
    let isSettings = useSelector<RootReducerType, boolean>(state => state.counterReducer.isSettings)
    let dispatch = useDispatch()

    // useEffect(() => {
    //     let maxItemStorage = localStorage.getItem(`maxValue`)
    //     if (maxItemStorage) {
    //         let maxValue = JSON.parse(maxItemStorage)
    //         dispatch(setMaxValueFromLocalStorageAC(maxValue))
    //     }
    //
    //     let startItemStorage = localStorage.getItem('startValue')
    //     if (startItemStorage) {
    //         let valueSettings = JSON.parse(startItemStorage)
    //         dispatch(setValueSettingsFromLocalStorageAC(valueSettings))
    //     }
    //
    //     let currentItemStorage = localStorage.getItem('currentValue')
    //     if (currentItemStorage) {
    //         let startValue = JSON.parse(currentItemStorage)
    //         dispatch(setStartValueFromLocalStorageAC(startValue))
    //     }
    // }, [])

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
            <Settings startValue={startValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} maxValue={maxValue}
                      setStartValueSettings={setStartValueSettings} valueSetting={valueSetting}/>
            <Counter startValue={startValue} increaseValue={increaseValue} resetValue={resetValue}
                     maxValue={maxValue} valueSetting={valueSetting} changeInput={changeInput}/>
            <Counter2 maxValue={maxValue} startValue={startValue} increaseValue={increaseValue}
                      resetValue={resetValue}
                      valueSetting={valueSetting} changeInput={changeInput}
                      openClosedSettings={openClosedSettings} isSettings={isSettings}
                      changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}
            />
        </div>
    );
}

export default App;
