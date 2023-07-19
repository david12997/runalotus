import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const PermissionGmapsSlice = createSlice({

    name: 'permission_gmaps',
    initialState: {

        state:false,

    },
    reducers:{

        setPermissionGmaps(state,action){
                
            state.state = action.payload.state;
        }
    },
    extraReducers(builder) {
            
        builder.addCase(HYDRATE,(state,action:any)=>{

            return {
                ...state,
                ...action.payload.lang_currency
            }
        })
    },

});

export const { setPermissionGmaps } = PermissionGmapsSlice.actions;
export default PermissionGmapsSlice.reducer;