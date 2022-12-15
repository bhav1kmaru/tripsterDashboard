import React from 'react';

export const AuthContext=React.createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=React.useState(false)
    return(
        <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>
    )
}