import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const langCurrencySlice = createSlice({

    name: 'lang_currency',
    initialState: {

        lang:'',
        currency:''
    },
    reducers:{

        setLangCurrencyGlobalState(state,action){
                
            state.lang = action.payload.lang;
            state.currency = action.payload.currency;
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

export const { setLangCurrencyGlobalState } = langCurrencySlice.actions;
export default langCurrencySlice.reducer;