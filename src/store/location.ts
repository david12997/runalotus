import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const locationSlice = createSlice({
    name: 'location_user',
    initialState: {
        location: {
            address_components: [],
            geolocation:{},
            value:""
        }
    },
    reducers:{
        
        setLocationGlobalState(state,action){

            state.location = action.payload;
            
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(HYDRATE,(state,action:any)=>{

            return {
                ...state,
                ...action.payload.location_user
            }
        })
    }
});



export const { setLocationGlobalState } = locationSlice.actions;
export default locationSlice.reducer;