import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

const initialState={
    contacts:[],
    contact:{},
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
});
export const singleContact=createAsyncThunk('contact/singleContact', async (id, {rejectWithValue}) => {
    try {
        const response =await axiosInstance.get(`/api/contacts/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const addContact =createAsyncThunk('contact/addContact', async (contactData, {rejectWithValue}) => {
    try {
        const response=await axiosInstance.post('/api/contacts', contactData)
        return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
});

export const deleteContact =createAsyncThunk('contact/deleteContact', async (id, {rejectWithValue}) => {
    try {
        await axiosInstance.delete(`/api/contacts/${id}`)
        return id;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
});
export const updateContact =createAsyncThunk('contact/updateContact', async (id,contactData, {rejectWithValue}) => {
    try {
        const response=await axiosInstance.put(`/api/contacts/${id}`, contactData)
        return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
});

const contactSlice=createSlice({
    name:"contact",
    initialState,
    reducers:{
        clearError: (state)=>{
            state.error=null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addContact.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(addContact.fulfilled, (state,action)=>{
            state.loading=false;
            state.contacts.push(action.payload);
        })
        .addCase(addContact.rejected, (state,action)=>{
            state.loading =false;
            state.error=action.payload;
        })
        .addCase(getAllContacts.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAllContacts.fulfilled, (state,action)=>{
            state.loading=false;
            state.contacts=action.payload
        })
        .addCase(getAllContacts.rejected, (state,action)=>{
            state.loading =false;
            state.error=action.payload;
        })
        .addCase(singleContact.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(singleContact.fulfilled, (state,action)=>{
            state.loading=false;
            state.contact=action.payload
        })
        .addCase(singleContact.rejected, (state,action)=>{
            state.loading =false;
            state.error=action.payload;
        })
        .addCase(deleteContact.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(deleteContact.fulfilled, (state,action)=>{
            state.loading=false;
            state.contacts.filter(item=> item._id !== action.payload);
            state.contact=null
        })
        .addCase(deleteContact.rejected, (state,action)=>{
            state.loading =false;
            state.error=action.payload;
        })
        .addCase(updateContact.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(updateContact.fulfilled, (state,action)=>{
            state.loading=false;
            state.contacts.map((item)=>item._id=== action.payload._id ? action.payload: item);
        })
        .addCase(updateContact.rejected, (state,action)=>{
            state.loading =false;
            state.error=action.payload;
        })

    }
})

export const {clearError} =contactSlice.actions;
export default contactSlice.reducer