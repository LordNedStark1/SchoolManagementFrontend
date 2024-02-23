import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import CreateCohortFormSlice from "@/ReduxStore/slice/CreateCohortFormSlice";


export const store = configureStore({
    reducer: {
        cohortForm: CreateCohortFormSlice 
    },
    
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>