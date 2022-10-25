import React from "react";

type ButtonPropsType = {
    name: string
    className: string
    disabled: boolean
    callback: () => void
}

export const Button = (props: ButtonPropsType) => {

    const {name, callback, disabled, className} = props

    return (
        <button disabled={disabled} onClick={callback}
                className={className}>{name}
        </button>
    )
}