import {combineReducers} from "redux";
import {Reducer} from "./Reducer";
import {legacy_createStore as createStore} from 'redux'
import {loadState} from "./localStorage";

const rootReducer = combineReducers({
    counterReducer: Reducer
})

const preloadedState = {
    counterReducer: {
        maxValue: loadState('maxValue') ? loadState('maxValue') : 1,
        startValue: loadState('startValue') ? loadState('startValue') : 0,
        valueSetting: loadState('currentValue') ? loadState('currentValue') : 0,
        changeInput: false,
        isSettings: false,
    }
}

export const store = createStore(rootReducer, preloadedState)

export type RootReducerType = ReturnType<typeof rootReducer>