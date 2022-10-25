import React, {ChangeEvent} from "react";
import s from "../Settings.module.css";

type InputValuePropsType = {
    title: string
    value: number
    classNameInput: string
    callback: (num: number) => void
}

export const InputValue = (props: InputValuePropsType) => {

    const {title, callback, value, classNameInput} = props

    const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(+e.currentTarget.value)
    }

    return (
        <div className={s.containerValue}>
            <p className={s.maxValueText}>{title}</p>
            <input onChange={valueHandler} className={classNameInput} type="number" value={value}/>
        </div>
    )
}