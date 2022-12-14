import {saveState} from "./localStorage";

export type InitialStateType = {
    maxValue: number
    startValue: number
    valueSetting: number
    changeInput: boolean
    isSettings: boolean
}
type increaseValueType = {
    type: 'INCREASE-VALUE'
}
type resetValueType = {
    type: 'RESET-VALUE'
}
type changeMaxValueType = {
    type: 'CHANGE-MAX-VALUE',
    payload: {
        num: number
    }
}
type changeStartValueType = {
    type: 'CHANGE-START-VALUE',
    payload: {
        num: number
    }
}
type setStartValueSettingsType = {
    type: 'SET-START-VALUE-SETTINGS'
}
type openClosedSettingsType = {
    type: 'OPEN-CLOSED-SETTINGS'
}

type allActionType =
    increaseValueType
    | resetValueType
    | changeMaxValueType
    | changeStartValueType
    | setStartValueSettingsType
    | openClosedSettingsType

const initialState = {
        maxValue: 1,
        startValue: 0,
        valueSetting: 0,
        changeInput: false,
        isSettings: false,
}

export const Reducer = (state: InitialStateType = initialState, action: allActionType): InitialStateType => {
    switch (action.type) {
        case "INCREASE-VALUE": {
            const newState = {...state, valueSetting: state.valueSetting + 1}
            saveState('currentValue',state.valueSetting+1)
            return newState
        }
        case "RESET-VALUE": {
            return {...state, valueSetting: state.startValue}
        }
        case "CHANGE-MAX-VALUE": {
            return {...state, maxValue: action.payload.num, changeInput: true}
        }
        case "CHANGE-START-VALUE": {
            return {...state, startValue: action.payload.num, changeInput: true}
        }
        case "SET-START-VALUE-SETTINGS": {
            const newState = {...state, startValue: state.startValue, changeInput: false, valueSetting:state.startValue}
            saveState('maxValue',state.maxValue)
            saveState('startValue',state.startValue)
            return newState
        }

        case "OPEN-CLOSED-SETTINGS": {
            saveState('maxValue',state.maxValue)
            saveState('startValue',state.startValue)
            if (!state.isSettings) {
                return {...state, isSettings: !state.isSettings}
            }
            return {...state,
                    startValue: state.startValue,
                    valueSetting:state.startValue,
                    changeInput: false,
                    isSettings: !state.isSettings
            }
        }
        default:
            return state
    }
}

export const increaseValueAC = () => {
    return {
        type: 'INCREASE-VALUE'
    } as const
}

export const resetValueAC = () => {
    return {
        type: 'RESET-VALUE'
    } as const
}

export const changeMaxValueAC = (num: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            num
        }
    } as const
}

export const changeStartValueAC = (num: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            num
        }
    } as const
}
export const setStartValueSettingsAC = () => {
    return {
        type: 'SET-START-VALUE-SETTINGS',
    } as const
}

export const openClosedSettingsAC = () => {
    return {
        type: 'OPEN-CLOSED-SETTINGS'
    } as const
}
