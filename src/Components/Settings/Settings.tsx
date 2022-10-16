import React from "react";
import s from './Settings.module.css'
import {Button} from "../Counter/Button/Button";

export const Settings = () => {

    const finallySetButtonClass = s.button

    return (
        <div className={s.wrapper}>
            <div className={s.counterSettingsWrapper}>
                <div className={s.containerValue}>
                    <p className={s.maxValueText}>max value: </p>
                    <input className={s.maxValueInput} type="number"/>
                </div>
                <div className={s.containerValue} >
                    <p className={s.maxValueText}>start value: </p>
                    <input className={s.maxValueInput} type="number"/>
                </div>
            </div>

            <div className={s.wrapperButton}>
                <div className={s.buttonSet}>
                    <Button name={'set'} callback={()=>{}} disabled={true} className={finallySetButtonClass}/>
                </div>
            </div>
        </div>
    )
}