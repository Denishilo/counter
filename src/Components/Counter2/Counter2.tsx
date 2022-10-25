import styles from './Counter2.module.css'
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button} from "../Counter/Button/Button";
import s from "../Counter/Settings/Settings.module.css";
import {InputValue} from "../Counter/Settings/InputValue/InputValue";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CounterPropsType = DefaultButtonPropsType & {
    maxValue: number
    startValue: number
    increaseValue: () => void
    resetValue: () => void
    valueSetting: number
    changeInput: boolean
    openClosedSettings: () => void
    isSettings: boolean
    changeMaxValue: (num: number) => void
    changeStartValue: (num: number) => void
}

export const Counter2 = (props: CounterPropsType) => {

    const {
        startValue,
        increaseValue,
        resetValue,
        maxValue,
        valueSetting,
        changeInput,
        openClosedSettings,
        isSettings,
        changeMaxValue,
        changeStartValue
    } = props

    const counterValue = valueSetting >= maxValue || valueSetting < 0 || startValue === maxValue;

    const buttonIncreaseDisabled = valueSetting < 0 || startValue >= maxValue || valueSetting >= maxValue;
    const buttonIncreaseClassName = styles.button + (startValue >= maxValue || valueSetting < 0 || valueSetting >= maxValue ? ' ' + styles.disabled : '')

    const buttonResetDisabled = startValue <= 0 || valueSetting >= maxValue || valueSetting === startValue || valueSetting < 0;
    const buttonResetClassName = styles.button + (valueSetting >= maxValue || startValue < 0 || valueSetting === startValue || valueSetting < 0 ? ' ' + styles.disabled : ' ')

    const disabledButtonSet = maxValue === valueSetting || maxValue < valueSetting || valueSetting < 0
    const buttonSetClassName = styles.button + ' ' + (disabledButtonSet ? styles.disabled : '') + ' ' + (isSettings ? styles.disabledButtonSet : '')

    const wrapperButtons = styles.counterButton + ' ' + (isSettings ? styles.wrapperButtonsSettings : '')
const counterWrapper = styles.counterWrapper + ' ' + (isSettings ? styles.counterWrapperSettings : '')
    const changeOpenSetHandler = () => {
        openClosedSettings()
    }

    const changeMaxValueHandler = (num: number) => {
        changeMaxValue(num)
    }

    const changeStartValueHandler = (num: number) => {
        changeStartValue(num)
    }

    const finallyInputMaxValueClass = s.input + (maxValue === valueSetting || maxValue < 0 || maxValue < valueSetting ? ' ' + s.errorInput : '')
    const finallyInputStartValueClass = s.input + (disabledButtonSet ? ' ' + s.errorInput : '')
    return (
        <div className={counterWrapper}>

            {!isSettings ? <div className={styles.counterValueWrapper}>
                <p className={counterValue ? styles.counterValue + ' ' + styles.maxValue : styles.counterValue}>
                    {valueSetting < 0 || valueSetting >= maxValue
                        ? `incorrect value`
                        : changeInput ? 'press set' : startValue
                    }
                </p>
            </div> : <div className={s.counterSettingsWrapper}>
                <InputValue callback={changeMaxValueHandler} title={'max value:'} value={maxValue}
                            classNameInput={finallyInputMaxValueClass}/>
                <InputValue callback={changeStartValueHandler} title={'start value:'} value={valueSetting}
                            classNameInput={finallyInputStartValueClass}/>
            </div>}

            <div className={wrapperButtons}>
                <div className={styles.buttonIncrease}>
                    {!isSettings ? <Button name={'increase'} callback={increaseValue}
                                           disabled={buttonIncreaseDisabled}
                                           className={buttonIncreaseClassName}/> : ''}
                </div>
                <div className={styles.buttonReset}>
                    {!isSettings ? <Button name={'reset'} callback={resetValue}
                                           disabled={buttonResetDisabled}
                                           className={buttonResetClassName}/> : ''}
                </div>
                <div className={styles.buttonReset}>
                    <Button name={'set'} callback={changeOpenSetHandler} disabled={disabledButtonSet}
                            className={buttonSetClassName}/>
                </div>
            </div>
        </div>
    )
}