import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Button {
    buttonName: string;
}

const initialState: Button = {
    buttonName: "",
};


const CreateCohortFormSlice = createSlice({
    name: "CreateCohortForm",
    initialState,
    reducers: {
        setButtonName: (state, action: PayloadAction<string>) => {
            state.buttonName = action.payload;
        },
    },
})

export const { setButtonName } = CreateCohortFormSlice.actions;

export default CreateCohortFormSlice.reducer;