import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

initialState={
    contacts:[],
    loading: false,
    error: null
};
export const getAllContacts=createAsyncThunk('contact/getAllContacts', async (_, {rejectWithValue}) => {
    try {
        const response =await axiosInstance.get('/api/contacts');
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})