import React from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {InputValue} from "./InputValue/InputValue";

type SettingsPropsType = {
    changeMaxValue: (num: number) => void
    changeStartValue: (num: number) => void
    maxValue: number
    setStartValueSettings:()=>void
    valueSetting:number
}

export const Settings = (props: SettingsPropsType) => {
    const {changeMaxValue, changeStartValue, maxValue,setStartValueSettings,valueSetting} = props

    const finallySetButtonClass = s.button

    const changeMaxValueHandler = (num: number) => {
        changeMaxValue(num)
    }

    const changeStartValueHandler = (num: number) => {
        changeStartValue(num)
    }

    const changeSetHandler = () => {
        setStartValueSettings()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counterSettingsWrapper}>
                <InputValue callback={changeMaxValueHandler} title={'max value:'} value={maxValue}/>
                <InputValue callback={changeStartValueHandler} title={'start value:'} value={valueSetting}/>
            </div>

            <div className={s.wrapperButton}>
                <Button name={'set'} callback={changeSetHandler} disabled={maxValue===valueSetting} className={finallySetButtonClass}/>
            </div>
        </div>
    )
}