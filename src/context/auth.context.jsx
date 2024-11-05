import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'



const AuthContext = createContext();
function AuthContextProvider(props) {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
   
    
    function authenticateUser(username, password) {
        
        authService.login({ username, password })
            .then(response => {
                
                localStorage.setItem("token", response.data.authToken)
                setLoggedInUser(response.data.user)
                setIsLoggedIn(true)
                toast.success("Login successful!")
                navigate('/')
            })
            .catch(error => {
                console.error("Login failed:", error)
                toast.error("Login failed. Please check your credentials.")
            });
    }
    
    function signup(requestBody) {
        return authService.signup(requestBody) 
            .then(response => {
                
                console.log("User created:", response.data)
                toast.success("Signup successful! You can now log in.")
                return true
                
            })
            .catch(error => {
                console.error("Signup failed:", error)
                toast.error("Signup failed. Please try again.")
                return false
            });
    }
    function logOutUser() {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        setLoggedInUser(null)
        toast.success("Logout successful!")
        navigate('/')
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            authService.verify()
                .then(userInformation => {
                    setLoggedInUser(userInformation.data)
                    setIsLoggedIn(true)
                })
                .catch(() => {
                    setIsLoggedIn(false)
                    setLoggedInUser(null)
                });
            }        
             setIsLoading(false)
        }, []);
    return (
        <AuthContext.Provider value={{
            loggedInUser,
            isLoading,
            isLoggedIn,
            
            authenticateUser,
            logOutUser,
            signup 
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}
export { AuthContextProvider, AuthContext }