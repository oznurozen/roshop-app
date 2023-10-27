import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= { //bu bizim için başlangıç durumlarını temsil ediyor
    categories: [] // kategorilerle alakalı ilk başta bilgim yok bunları array içerisinde saklamak istiyorum
}

export const getCategories = createAsyncThunk('category', async() =>{
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {}, // burası api kullanılmadan sayfa içerisinde statik olarak yapılan v eriler için geçerli
    extraReducers : (builder) =>{ //dısarıdan bir tane builder alıcak
        builder // ve her builder üzerinden appCase ekleyeceğim
        .addCase(getCategories.fulfilled, (state, action)=>{
            state.categories = action.payload;
        })
    }
})

export default categorySlice.reducer