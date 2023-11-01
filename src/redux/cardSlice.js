import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage = () => { // cart ile ilgili verileri her işlem yaptığımda set edicem. set ettiğim seyleri localstarge üzerinden alıcam 
    let cart = localStorage.getItem('cart'); // ve json.pars ederek return edicem
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []
    }
}

const storeInLocalStorage = (data) => { //dışarıdan veri alıcak gelen veri üzerinden json.stringify kullanarak bunları setıtem üzerinden harekete geçiricez
    localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
    carts: fetchFromLocalStorage(), //hesaplamaları yapacağım olay
    itemCount: 0, //ürün sayım başlangıç degeri
    totalAmount: 0 //toplam tutar
}

const cartSlice =  createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => { //kart ekleme kısımları
            const isItemCart = state.carts.find(item => item.id === action.payload.id) 
            //state.cards üzerinden bul=find et. her bir elemanını tek tek gez, dışarıdan gelen id değerinin eşit olup olmadığını kontrol et bul 
            //aynı ürün varsa ekrana koy yada koyma gibi düşünebiliriz

            if(isItemCart){
                const tempCart = state.carts.map(item => { //state in kartlarını tek tek gezicem
                    if(item.id === action.payload.id){ //her bir kart içerisinden gelen itemların id leri ile action.payload.id değerler eşitse
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price;
                        return{
                            ...item, quantity: tempQty, totalPrice : tempTotalPrice
                        }
                    }else{
                        return item //birbirlerine eşit değilse item ı dönsün
                    }
                })

                state.carts = tempCart;
                storeInLocalStorage(state.carts)
            }else{
                state.carts.push(action.payload) //böyle bir ürün olmama durumunda ction.payload puslanır
                storeInLocalStorage(state.carts) //pusladıktan sonra da storeInLocalStorage içerisine kaydetmeyı yapacağız
            }
        },
        removeFromCart : (state, action) => { //kart silme kısmı
            const tempCart = state.carts.filter(item => item.id !== action.payload) //farklı olanları filtrele aynı olanları sil
            state.carts = tempCart  //state.carts larımı  güncellemem gerekiyor
            storeInLocalStorage(state.carts) //localstorage içerisini de güncellemek istiyorum
        },
        clearCart : (state) => { //tüm kartımı temizlemek
            state.carts = []
            storeInLocalStorage(state.carts)
        },
        getCartTotal : (state) => { //toplam fiyatları ve ürün sayısını döndürmeye çalışabiliriz.
            state.totalAmount = state.carts.reduce((cartTotal, cartItem)=>{
                return cartTotal += cartItem.price * cartItem.quantity // sepetteki toplam fiyatlar
            }, 0)
            state.itemCount = state.carts.length //kartımda kaç ürün var
        }

    }
}) 

export const {addToCart, removeFromCart, clearCart, getCartTotal} = cartSlice.actions
export default cartSlice.reducer