import React, { Children } from "react";
import UserContext from "./UserContext";

const UserContextprovider = ({Children}) =>{
    const [user,setuser] = React.useState([])

    return(
        <UserContext.Provider value={{user,setuser}}>
       { Children }
        </UserContext.Provider>
    )
}

export default UserContextprovider;