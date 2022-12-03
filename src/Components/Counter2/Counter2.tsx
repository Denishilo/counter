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

    const {startValue, increaseValue, resetValue, maxValue, valueSetting, changeInput, openClosedSettings, isSettings, changeMaxValue,
        changeStartValue} = props
    //Counter
    const incorrectValue = startValue < 0 || maxValue <= startValue;
    const counterValueIncorrect = incorrectValue || valueSetting >= maxValue
    const buttonIncreaseDisabled = incorrectValue || counterValueIncorrect
    const buttonIncreaseClassName = styles.button + (counterValueIncorrect ? ' ' + styles.disabled : '')
    const buttonResetDisabled = incorrectValue || valueSetting === startValue;
    const buttonResetClassName = styles.button + (buttonResetDisabled? ' ' + styles.disabled : ' ')
    //Settings
    const wrapperButtons = styles.counterButton + ' ' + (isSettings ? styles.wrapperButtonsSettings : '')
    const counterWrapper = styles.counterWrapper + ' ' + (isSettings ? styles.counterWrapperSettings : '')
    const incorrectValues = maxValue === valueSetting || maxValue <= startValue || startValue < 0 || maxValue < 0
    const buttonSetClassName = styles.button + ' ' + (incorrectValues ? styles.disabled : '') + ' ' + (isSettings ? styles.disabledButtonSet : '')
    const finallyInputMaxValueClass = s.input + (incorrectValues ? ' ' + s.errorInput : '')
    const finallyInputStartValueClass = s.input + (incorrectValues ? ' ' + s.errorInput : '')

    const changeMaxValueHandler = (num: number) => {
        changeMaxValue(num)
    }
    const changeStartValueHandler = (num: number) => {
        changeStartValue(num)
    }
    return (
        <div className={counterWrapper}>

            {!isSettings ? <div className={styles.counterValueWrapper}>
                <p className={counterValueIncorrect ? styles.counterValue + ' ' + styles.maxValue : styles.counterValue}>
                    {incorrectValue
                        ? `incorrect value`
                        : changeInput ? 'press set' : valueSetting
                    }
                </p>
            </div> : <div className={s.counterSettingsWrapper}>
                <InputValue callback={changeMaxValueHandler} title={'max value:'} value={maxValue}
                            classNameInput={finallyInputMaxValueClass}/>
                <InputValue callback={changeStartValueHandler} title={'start value:'} value={startValue}
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
                    <Button name={'set'} callback={openClosedSettings} disabled={incorrectValues}
                            className={buttonSetClassName}/>
                </div>
            </div>
        </div>
    )
}