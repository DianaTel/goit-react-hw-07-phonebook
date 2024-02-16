import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://65cf8e9dbdb50d5e5f5b89c8.mockapi.io/contacts';


const getContacts = async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const postContact = async (newContact, thunkAPI) => {
  try {
    const response = await axios.post(URL, newContact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const delContact = async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`${URL}/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  getContacts
);

export const postContactThunk = createAsyncThunk(
  'phoneBook/postContact',
  postContact
);

export const delContactThunk = createAsyncThunk(
  'phoneBook/delContact',
  delContact
);
