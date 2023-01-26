import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../routes/coordinator";

export default function useProtectedPage () {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!token){
            goToSignUp(navigate)
        }
    }, [])
}
