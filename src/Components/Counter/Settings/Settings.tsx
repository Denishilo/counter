import React from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {InputValue} from "./InputValue/InputValue";


type SettingsPropsType = {
    maxValue: number
    valueSetting: number
    setStartValueSettings: () => void
    changeMaxValue: (num: number) => void
    changeStartValue: (num: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const {changeMaxValue, changeStartValue, maxValue, setStartValueSettings, valueSetting} = props

    const changeMaxValueHandler = (num: number) => {
        changeMaxValue(num)
    }

    const changeStartValueHandler = (num: number) => {
        changeStartValue(num)
    }

    const changeSetHandler = () => {
        setStartValueSettings()
    }

    const disabledButtonSet = maxValue === valueSetting || maxValue < valueSetting || valueSetting < 0
    const finallySetButtonClass = s.button + (disabledButtonSet ? ' ' + s.disabled : '')
    const finallyInputMaxValueClass = s.input + (maxValue === valueSetting || maxValue < 0 || maxValue < valueSetting ? ' ' + s.errorInput : '')
    const finallyInputStartValueClass = s.input + (disabledButtonSet ? ' ' + s.errorInput : '')


    return (
        <div className={s.wrapper}>
            <div className={s.counterSettingsWrapper}>
                <InputValue callback={changeMaxValueHandler} title={'max value:'} value={maxValue}
                            classNameInput={finallyInputMaxValueClass}/>
                <InputValue callback={changeStartValueHandler} title={'start value:'} value={valueSetting}
                            classNameInput={finallyInputStartValueClass}/>
            </div>

            <div className={s.wrapperButton}>
                <Button name={'set'} callback={changeSetHandler} disabled={disabledButtonSet}
                        className={finallySetButtonClass}/>
            </div>
        </div>
    )
}