import { useAuthContext } from "./useAuthContext"
import { useClubContext } from "./useClubContext"
import { useDashboardContext } from "./useDashboardContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()
    const {dispatch: dashboardDispatch} = useDashboardContext()
    const {dispatch: clubDisptach} = useClubContext()

    const logout = () => {
            
        //remove user from storage
        localStorage.removeItem('club')

        dispatch({type:'LOGOUT'})
        dashboardDispatch({type:'SET_EVENTS',payload:null})
        clubDisptach({type:'SET_CLUB',payload:null})

    }

    return {logout}
} 