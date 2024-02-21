import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBurger = createAsyncThunk('burger/getBurger', async () => {
    const response = await axios.get('https://adorable-bat-fatigues.cyclic.app/burgers');
    return response.data; // Mengambil data dari respons, bukan respons itu sendiri
})

export const burgerSlice = createSlice({
    name: "burger",
    initialState: {
        status: "idle",
        data: []
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBurger.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getBurger.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(getBurger.rejected, (state, action) => {
                state.status = "failed"; 
            });
    },
});

export default burgerSlice.reducer;
