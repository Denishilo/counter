import React, {ChangeEvent} from "react";
import s from "../Settings.module.css";

type InputValuePropsType = {
    title: string
    callback: (num: number) => void
    value: number
}

export const InputValue = (props: InputValuePropsType) => {
    const {title, callback, value} = props


    const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(+e.currentTarget.value)
    }

    return (
        <div className={s.containerValue}>
            <p className={s.maxValueText}>{title}</p>
            <input onChange={valueHandler} className={s.maxValueInput} type="number" value={value}/>
        </div>
    )
}