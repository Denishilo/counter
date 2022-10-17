import styles from './Counter.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button} from "./Button/Button";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CounterPropsType = DefaultButtonPropsType & {
    maxValue: number
    startValue: number
    increaseValue: () => void
    resetValue: () => void
    changeError: () => void
    value: number
}

export const Counter = (props: CounterPropsType) => {
    let {startValue, increaseValue, resetValue, maxValue, value} = props

    const finallyIncButtonClass = styles.button + (startValue >= maxValue || startValue < 0 ? ' ' + styles.disabled : '')
    const finallyResetButtonClass = styles.button + (startValue > 0 ? ' ' : ' ' + styles.disabled)

    return (
        <div className={styles.counterWrapper}>

            <div className={styles.counterValueWrapper}>
                <p
                    className={startValue >= 0 && startValue !== maxValue
                        ? styles.counterValue
                        : styles.counterValue + ' ' + styles.maxValue}

                >
                    {startValue < 0 || startValue > maxValue
                        ? `incorrect value`
                        : !startValue ? `enter value` : startValue
                    }

                </p>

            </div>
            <div className={styles.counterButton}>
                <div className={styles.buttonIncrease}>
                    <Button name={'increase'} callback={increaseValue}
                            disabled={value < 0 || value >= maxValue}
                            className={finallyIncButtonClass}/>
                </div>
                <div className={styles.buttonReset}>
                    <Button name={'reset'} callback={resetValue}
                            disabled={value === 0}
                            className={finallyResetButtonClass}/>
                </div>
            </div>
        </div>
    )
}