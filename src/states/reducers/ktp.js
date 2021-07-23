export const reducer = (state, actions) => {
    return {
        ...state,
        ...actions
    }
}

export const initialState = {
    name: null,
    address: null
}