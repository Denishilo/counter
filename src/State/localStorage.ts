export const loadState = (value:string) =>{
    try {
        const serializedState = localStorage.getItem(value);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (value:string,state:number) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(value, serializedState);
    } catch {
    }
};