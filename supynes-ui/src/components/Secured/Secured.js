// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react"
import {UserContext} from "../../App";

export default ({children}) => {
    const {loggedIn} = useContext(UserContext)

    return loggedIn() ? children : ""
}
