import { configureStore } from "@reduxjs/toolkit"
import { dressingRoomReducer } from "./dressingRoom.slice"
export const store = configureStore({
    reducer:{
        dressingRoomReducer
    }
})