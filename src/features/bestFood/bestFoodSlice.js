import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBestFood = createAsyncThunk('bbq', async () => {
    const response = await axios.get('https://adorable-bat-fatigues.cyclic.app/bbqs');
    return response.data; // Mengambil data dari respons, bukan respons itu sendiri
})

export const bestFoodSlice = createSlice({
    name: "bbq",
    initialState: {
        status: "idle",
        data: []
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBestFood.pending, (state, action) => {
                state.status = "loading"; // Mengubah ke lowercase
            })
            .addCase(getBestFood.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload; // Mengatur data ke action.payload
            })
            .addCase(getBestFood.rejected, (state, action) => {
                state.status = "failed"; // Menambah penanganan kasus ketika permintaan ditolak
            });
    },
});

export default bestFoodSlice.reducer;
