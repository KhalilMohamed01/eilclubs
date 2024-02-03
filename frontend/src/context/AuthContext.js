import React, { createContext, useReducer,useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN':
            return { club:action.payload}
        case 'LOGOUT':
            return { club:null }
        default:
            return state
        }
}

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        club:null
    })

    useEffect(()=>{
        const club = JSON.parse(localStorage.getItem('club'))

        if(club){
            dispatch({type:'LOGIN',payload:club})
        }
    },[])
    console.log('AuthContext state: ',state )

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

