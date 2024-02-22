import React, { createContext, useContext, useEffect, useState } from 'react'
export const AuthContext = createContext();

function AuthContaxtProvider({ children }) {
    const [curUserToken, setCurUserToken] = useState(null)
    useEffect(() => {
        checkAuthToken();
    }, [curUserToken])
    const checkAuthToken = async () => {
        const token = localStorage.getItem('jwt');

        try {
            if (token !== null) {
                setCurUserToken(token);
                // getUserData()
            } else {
                setCurUserToken(null);
            }
        } catch (error) {
            console.error('Error retrieving JWT token:', error);
        }
    }
    // const getUserData = () => {
    //     // Getting user data by Decoding token 
    //     try {
    //         if (curUserToken !== null) {
    //             const decodedToken = jwtDecode(curUserToken);
    //             setUserInfo(decodedToken)

    //         } else {
    //             console.log('Token value is empty =>');
    //         }

    //     } catch (error) {
    //         console.log('Somthing went wrong in getting Token =>', error);
    //     }
    // }
    return (
        <AuthContext.Provider value={{ curUserToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContaxtProvider


export const useAuthContext = () => {
    return useContext(AuthContext);
}