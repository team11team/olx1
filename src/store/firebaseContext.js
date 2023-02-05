import {createContext, useState} from 'react'


export const firebaseContex=createContext(null); 

export const AuthContex=createContext(null);

 
export default function Context({children}){
    const [user,setUser]=useState(null)
    return(
        <AuthContex.Provider value={{user,setUser}}>
            {children}
        </AuthContex.Provider>
    )

}