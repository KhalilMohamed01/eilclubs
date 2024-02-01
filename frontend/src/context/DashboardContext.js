import { createContext, useReducer } from 'react'

export const DashboardContext = createContext()

export const dashboardReducer = (state, action) => { 
    switch (action.type) {
        case 'SET_EVENTS':
            return {
                events: action.payload
            }
        case 'CREATE_EVENT':
            return {
                events:[action.payload, ...state.events]
            }
        case 'DELETE_EVENT':
                return {
                    events: state.events.filter((ev) => ev._id !== action.payload._id)
                }
        default:
            return state
    }
}
export const DashboardContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dashboardReducer, {
        events:null
    })

    return (
        <DashboardContext.Provider value={{...state, dispatch }}>
            { children }
        </DashboardContext.Provider>
    )
}