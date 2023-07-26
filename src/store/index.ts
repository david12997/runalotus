import { configureStore, combineReducers,getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore ,persistReducer } from "redux-persist";
import { persistConfig } from "./persist-config";
import { createWrapper } from "next-redux-wrapper";

//import reducers
import locationSliceReducer from './location';
import langCurrencySliceReducer from './lang-currency';
import permissionGmapsSliceReducer from './permission-gmaps';
import CartSliceReducer from './cart';

//combine reducers
const reducers = combineReducers({
    
    location:locationSliceReducer,
    lang_currency:langCurrencySliceReducer,
    permission_gmaps:permissionGmapsSliceReducer,
    cart:CartSliceReducer


});

const savedPersistReducer = persistReducer(persistConfig,reducers);

export const store = configureStore({

    reducer:savedPersistReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    }),
    devTools:process.env.NODE_ENV !== 'production'

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export const wrapper = createWrapper (()=>store);