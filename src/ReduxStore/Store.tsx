import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/ReduxStore/slice/AuthSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import CreateCohortFormSlice from "@/ReduxStore/slice/CreateCohortFormSlice";


export const store = configureStore({

    reducer: {
        authReducer,
        cohortForm: CreateCohortFormSlice 
    },
    
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch