import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatalog = createAsyncThunk('catalog/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('https://6686c7fa83c983911b039c05.mockapi.io/advert/advert');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
