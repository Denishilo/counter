import React from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Counter/Settings/Settings";
import {Counter2} from "./Components/Counter2/Counter2";
import {
    changeMaxValueAC,
    changeStartValueAC,
    increaseValueAC,openClosedSettingsAC,
    resetValueAC,
    setStartValueSettingsAC,
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

    const increaseValue = () => {
        dispatch(increaseValueAC())
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

    const setStartValueSettings = () => {
        dispatch(setStartValueSettingsAC())
    }

    const openClosedSettings = () => {
        dispatch(openClosedSettingsAC())
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
