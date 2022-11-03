type stateType = {
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
type setMaxValueFromLocalStorageType = {
    type: 'SET-MAX-VALUE-FROM-LOCAL-STORAGE',
    payload: {
        num: number
    }
}
type setValueSettingsFromLocalStorageType = {
    type: 'SET-VALUE-SETTINGS-FROM-LOCAL-STORAGE',
    payload: {
        num: number
    }
}

type setStartValueFromLocalStorageType = {
    type: 'SET-START-VALUE-FROM-LOCAL-STORAGE',
    payload: {
        num: number
    }
}
type allActionType =
    increaseValueType
    | resetValueType
    | changeMaxValueType
    | changeStartValueType
    | setStartValueSettingsType
    | openClosedSettingsType
    | setMaxValueFromLocalStorageType
    | setValueSettingsFromLocalStorageType
    | setStartValueFromLocalStorageType

export const Reducer = (state: stateType, action: allActionType): stateType => {
    switch (action.type) {
        case "INCREASE-VALUE": {
            const newState = {...state, startValue: state.startValue+1}
            localStorage.setItem('currentValue', JSON.stringify(state.startValue+1))
            return newState
        }
        case "RESET-VALUE": {
            return {...state, startValue: state.valueSetting}
        }
        case "CHANGE-MAX-VALUE": {
            return {...state, maxValue: action.payload.num, changeInput: true}
        }
        case "CHANGE-START-VALUE": {
            return {...state, valueSetting: action.payload.num, changeInput: true}
        }
        case "SET-START-VALUE-SETTINGS": {
            const newState = {...state, startValue: state.valueSetting, changeInput: false}
            localStorage.setItem('maxValue', JSON.stringify(state.maxValue));
            localStorage.setItem('startValue', JSON.stringify(state.valueSetting))
            return newState
        }
        case "OPEN-CLOSED-SETTINGS": {
            if (!state.isSettings) {
                return {...state, isSettings: !state.isSettings}
            }
            const newState = {...state, startValue: state.valueSetting, changeInput: false, isSettings: !state.isSettings}
            localStorage.setItem('maxValue', JSON.stringify(state.maxValue));
            localStorage.setItem('startValue', JSON.stringify(state.valueSetting))
            return newState
        }
        case "SET-MAX-VALUE-FROM-LOCAL-STORAGE": {
            return {...state, maxValue: action.payload.num}
        }
        case "SET-VALUE-SETTINGS-FROM-LOCAL-STORAGE": {
            return {...state, valueSetting: action.payload.num}
        }
        case "SET-START-VALUE-FROM-LOCAL-STORAGE": {
            return {...state, startValue: action.payload.num}
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

export const setMaxValueFromLocalStorageAC = (num: number) => {
    return {
        type: 'SET-MAX-VALUE-FROM-LOCAL-STORAGE',
        payload: {
            num
        }
    } as const
}

export const setValueSettingsFromLocalStorageAC = (num: number) => {
    return {
        type: 'SET-VALUE-SETTINGS-FROM-LOCAL-STORAGE',
        payload: {
            num
        }
    } as const
}

export const setStartValueFromLocalStorageAC = (num: number) => {
    return {
        type: 'SET-START-VALUE-FROM-LOCAL-STORAGE',
        payload: {
            num
        }
    } as const
}