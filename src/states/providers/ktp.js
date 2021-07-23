import React from "react"
import { reducer, initialState } from "../reducers/ktp"

export const KtpContext = React.createContext({
    state: initialState,
    dispatch: () => null
})

export const ReactProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <KtpContext.Provider value={{state, dispatch} }>
            { children }
        </KtpContext.Provider>
    )
}