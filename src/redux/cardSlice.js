import { createSlice } from "@reduxjs/toolkit";

//fetchFromLocalStorage = yerel depodan getir anlamında
const fetchFromLocalStorage = () => { // cart ile ilgili verileri her işlem yaptığımda set edicem. set ettiğim seyleri localstarge üzerinden alıcam 
    let cart = localStorage.getItem('cart'); // ve json.pars ederek return edicem
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []  //bu benim için verileri ÇAĞARDIĞIM YER
    }
}

const storeInLocalStorage = (data) => { //dışarıdan veri alıcak gelen veri üzerinden json.stringify kullanarak bunları setıtem üzerinden harekete geçiricez
    localStorage.setItem('cart', JSON.stringify(data)) // dışarıdan vermiş olduğum verileri localStorage bir fonksiyon olarak düşünebilirsiniz.
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
                        let tempQty = item.quantity + action.payload.quantity; // bir tane dışarıdan gönderdiğim quantity
                        let tempTotalPrice = tempQty + item.price; //oluşturmuş olduğum quantity ile beraber price ı hesapladı toplam
                        // total hesaplama işlemlerini yapmış olucam burada
                        return{ //bunları yapptıktan sonra return etmemiz gerekiyor
                            ...item, quantity: tempQty, totalPrice : tempTotalPrice
                            //tüm item ları dön, döndüğün itemler üzerinden bir quantity olayı döndür , en sonda totalPrice hesaplaması yap
                        }
                    }else{ //eşit değilse!!!
                        return item //birbirlerine eşit değilse item ı dönsün
                    }
                })

                state.carts = tempCart; //state.carts ların içerisine tempCartları atıyoruz
                storeInLocalStorage(state.carts) //fonfsiyonumun içerisine de carts ı set ediyorum
            }else{ //isItemCart yoksa!!!
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