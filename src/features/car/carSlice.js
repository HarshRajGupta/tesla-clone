import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cars: [
		{ name: 'Model S', id: 'Model-S' },
		{ name: 'Model 3', id: 'Model-3' },
		{ name: 'Model X', id: 'Model-X' },
		{ name: 'Model Y', id: 'Model-Y' },
		{ name: 'Solar Roof', id: 'Solar-Roof' },
		{ name: 'Accessories', id: 'Accessories' },
	],
};

const carSlice = createSlice({
	name: 'car',
	initialState,
	reducers: {},
});

export const selectCars = (state) => state.car.cars;
export default carSlice.reducer;
