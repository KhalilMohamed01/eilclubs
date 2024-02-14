import { useState } from "react"
import { useAuthContext } from "./useAuthContext"


export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const rootUrl = process.env.NODE_ENV === 'production' ? 
    'https://eilclubs-api-git-test-khalilmohamed01s-projects.vercel.app' : 'http://localhost:4000'
    const login = async(username,password)=> {
        setIsLoading(true)
        setError()

        const response = await fetch(rootUrl +'/api/clubs/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username,password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){

            localStorage.setItem('club',JSON.stringify(json))


            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
    }
    return {login,isLoading,error}
}