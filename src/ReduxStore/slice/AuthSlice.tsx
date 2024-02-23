import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value : AuthState;
}

type AuthState ={
    isAuth: boolean;
    userName: string;
    uuid: string;
    isModerator: boolean;
}

const initialState = {
    value: {
        isAuth: false,
        userName: "",
        uuid: "",
        isModerator: false
    }as AuthState,
} as InitialState;

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    userName: action.payload,
                    uuid: "eA98SKfjhkjfhkhkh2934u982",
                    isModerator: false,
                }
            }
        }
    }, 
})


export const {logIn , logOut} = auth.actions

export default auth.reducer;