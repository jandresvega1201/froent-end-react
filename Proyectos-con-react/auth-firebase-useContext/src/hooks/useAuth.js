import React from "react";
import {authContext} from "../context/authContex";

const useAuth = () => {
    return React.useContext(authContext)
}
export {useAuth}