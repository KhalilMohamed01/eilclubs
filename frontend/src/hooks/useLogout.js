import { useAuthContext } from "./useAuthContext"
import { useDashboardContext } from "./useDashboardContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()
    const {dispatch: dashboardDispatch} = useDashboardContext()

    const logout = () => {
            
        //remove user from storage
        localStorage.removeItem('club')

        dispatch({type:'LOGOUT'})
        dashboardDispatch({type:'SET_EVENTS',payload:null})
    }

    return {logout}
} 