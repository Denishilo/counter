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

    const counterValue = valueSetting >= maxValue || startValue < 0 || startValue === maxValue;

    const buttonIncreaseDisabled = startValue < 0 || valueSetting >= maxValue || startValue >= maxValue;
    const buttonIncreaseClassName = styles.button + (valueSetting >= maxValue || startValue < 0 || startValue >= maxValue ? ' ' + styles.disabled : '')

    const buttonResetDisabled = startValue <= 0 || startValue >= maxValue || valueSetting === startValue || startValue < 0;
    const buttonResetClassName = styles.button + (startValue >= maxValue || startValue < 0 || valueSetting === startValue || startValue < 0 ? ' ' + styles.disabled : ' ')

    return (
        <div className={styles.counterWrapper}>

            <div className={styles.counterValueWrapper}>
                <p className={counterValue ? styles.counterValue + ' ' + styles.maxValue : styles.counterValue}>
                    {startValue < 0 || valueSetting >= maxValue || maxValue <= startValue
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