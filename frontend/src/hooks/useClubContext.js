import { useContext } from "react"
import { ClubContext } from "../context/ClubContext"

export const useClubContext = () => {
    const context = useContext(ClubContext)

    if (!context) {
        throw Error('useClubContext must be used inside a Provider')
    }
    return context
}