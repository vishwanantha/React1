import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const DataSlice =createSlice({

    name: 'data',
	initialState: {
		data: [],
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		addData: (state, action) => {
			state.data.push(action.payload);
		},
        deleteData: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload);
		},
	},
});
export const { setData, addData, deleteData}=DataSlice.actions
export default DataSlice.reducer