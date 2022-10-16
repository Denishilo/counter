import styles from './Counter.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button} from "./Button/Button";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CounterPropsType = DefaultButtonPropsType & {
    value: number
    increaseValue: () => void
    resetValue: () => void
    changeError:() => void
}

export const Counter = (props: CounterPropsType) => {
    let {value, increaseValue,  resetValue} = props

    const finallyIncButtonClass = styles.button + (value === 5 ? ' ' + styles.disabled : '')
    const finallyResetButtonClass = styles.button + (value > 0 ? ' ' : ' ' + styles.disabled)


    return (
        <div className={styles.counterWrapper}>
            <div className={styles.counterValueWrapper}>
                <p className={value !==5 ? styles.counterValue : styles.counterValue + ' ' + styles.maxValue}>{value}</p>
            </div>
            <div className={styles.counterButton}>
                <div className={styles.buttonIncrease}>
                    <Button name={'increase'} callback={increaseValue} disabled={value === 5}
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