import { createContext,useState } from 'react'

export const Postcontext=createContext(null)


function Post ({children}){

    const [PostDetails, SetpostDetails] = useState();
    
 
   


    return(
        <Postcontext.Provider value={{PostDetails,SetpostDetails}}>
            {children}

        </Postcontext.Provider>
      
    )
}

export default Post