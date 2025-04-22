import {configureStore} from "@reduxjs/toolkit"
import loginSlice from "./Slicers/loginSlice"
import projectSlice from "./Slicers/projectSlice"
export const store = configureStore({
    reducer:{
        Login : loginSlice,
        Project: projectSlice,
    }
})