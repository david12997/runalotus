import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface CartState {
    products: {quantity:number,product:any}[],
    total: number,
    quantity: number,
    shipping: number,
    tax: number,
    subtotal: number,
    discount: number,
    coupon: string,
    couponApplied: boolean,
    update: boolean
}

const InitialStateCart:CartState = {
    products: [],
    total: 0,
    quantity: 0,
    shipping: 0,
    tax: 0,
    subtotal: 0,
    discount: 0,
    coupon: '',
    couponApplied: false,
    update: true
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: InitialStateCart,
    reducers:{
        
        setProducts(state,action){

            state.subtotal = 0;
            state.products = state.products.concat(action.payload);
            state.products.forEach((product)=>{
                
                if(product.product.attributes.discount_price !== "0"){
                    state.subtotal += parseInt(product.product.attributes.discount_price) * product.quantity;
                   
                }else{
                    state.subtotal += parseInt(product.product.attributes.sale_price) * product.quantity;
                }

            });
            
            
        },

        setQuantity(state,action){
                
            state.quantity = action.payload;
        },

        setQuantityProduct(state,action){
 
            state.subtotal =0; 
            state.products[action.payload.id].quantity = action.payload.quantity;
            state.products.forEach((product)=>{
                
                if(product.product.attributes.discount_price !== "0"){
                    state.subtotal += parseInt(product.product.attributes.discount_price) * product.quantity;
                   
                }else{
                    state.subtotal += parseInt(product.product.attributes.sale_price) * product.quantity;
                }

            });

           
            
            
        },

        deleteProductCart(state,action){
            
            state.subtotal =0; 
            state.products = state.products.filter((product)=>product.product.id !== action.payload);
            state.products.forEach((product)=>{
                
                if(product.product.attributes.discount_price !== "0"){
                    state.subtotal += parseInt(product.product.attributes.discount_price) * product.quantity;
                   
                }else{
                    state.subtotal += parseInt(product.product.attributes.sale_price) * product.quantity;
                }

            });
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



export const { setProducts, setQuantity, deleteProductCart, setQuantityProduct } = CartSlice.actions;
export default CartSlice.reducer;