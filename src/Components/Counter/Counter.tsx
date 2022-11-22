import styles from './Counter.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button} from "./Button/Button";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CounterPropsType = DefaultButtonPropsType & {
    maxValue: number
    startValue: number
    increaseValue: () => void
    resetValue: () => void
    valueSetting: number
    changeInput: boolean
}

export const Counter = (props: CounterPropsType) => {
    const {startValue, increaseValue, resetValue, maxValue, valueSetting, changeInput} = props

    const incorrectValue = startValue < 0 || maxValue <= startValue
    const counterValueIncorrect = incorrectValue || valueSetting >= maxValue
    const buttonIncreaseDisabled = incorrectValue || counterValueIncorrect
    const buttonIncreaseClassName = styles.button + (counterValueIncorrect ? ' ' + styles.disabled : '')
    const buttonResetDisabled = incorrectValue || valueSetting === startValue;
    const buttonResetClassName = styles.button + (buttonResetDisabled? ' ' + styles.disabled : ' ')

    return (
        <div className={styles.counterWrapper}>
            <div className={styles.counterValueWrapper}>
                <p className={counterValueIncorrect ? styles.counterValue + ' ' + styles.maxValue : styles.counterValue}>
                    { incorrectValue
                        ? `incorrect value`
                        : changeInput ? 'press set' : valueSetting
                    }
                </p>
            </div>
            <div className={styles.counterButton}>
                <div className={styles.buttonIncrease}>
                    <Button name={'increase'} callback={increaseValue}
                            disabled={buttonIncreaseDisabled}
                            className={buttonIncreaseClassName}/>
                </div>
                <div className={styles.buttonReset}>
                    <Button name={'reset'} callback={resetValue}
                            disabled={buttonResetDisabled}
                            className={buttonResetClassName}/>
                </div>
            </div>
        </div>
    )
}