import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],  //tüm ürünlerim için
    productsStatus : STATUS.IDLE, // prodakların statüleri olacak , loading olayları sucsess olaylarını belirtmek için.. utils/status.js
    productDetail: [], // detaylar sayfasında ayrı bir slice  oluşturmak yerine burda kullanabiliriz.
    productDetailStatus: STATUS.IDLE //detayın da bir statusu olacak çünkü detaylar sayfası yüklenirken de loading olayı varsa veriler gelirken onun bize gözükmesi gerekir

}

export const getProducts = createAsyncThunk('getproducts', async() =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})

export const getDetailProduct = createAsyncThunk('getproduct', async(id) =>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`) // dinamik bir yapıya bağlamamız gerekiyor
    const data = await response.json()
    return data
})

export const getCategoryProducts = createAsyncThunk('getcategory', async(category) =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data
})



const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => { // pending: sayfaya yülenme durumu
            state.productsStatus = STATUS.LOADİNG
        })
        .addCase(getProducts.fulfilled, (state, action) => { //fulfilled: pending durumundan çıkıp tamamlandı durumuna gelirse
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload  //products ların action.payload ile dolmasını istiyorum
        })
        .addCase(getProducts.rejected, (state, action) => { // rejected: hata olması durumunda
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADİNG
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS
            state.productDetail = action.payload
        })
        .addCase(getDetailProduct.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAIL
        })
        .addCase(getCategoryProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADİNG
        })
        .addCase(getCategoryProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload
        })
        .addCase(getCategoryProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAIL
        })
        
    }
})

export default productSlice.reducer