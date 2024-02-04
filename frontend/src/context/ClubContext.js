import { createContext, useReducer } from 'react'

export const ClubContext = createContext()

export const clubReducer = (state, action) => { 
    switch (action.type) {
        case 'SET_CLUB':
            return {
                clubData: action.payload
            }
        case 'UPDATE_CLUB':
            
            return {
                clubData:action.payload
            }
        default:
            return state
    }
}
export const ClubContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clubReducer, {
        clubData:null
    })

    return (
        <ClubContext.Provider value={{...state, dispatch }}>
            { children }
        </ClubContext.Provider>
    )
}