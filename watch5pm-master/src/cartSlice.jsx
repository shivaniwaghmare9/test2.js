// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name:"mycart",
//     initialState:{
//         cart:[]
//     },
//     reducers:{
//         addToCart:(state, actions)=>{
//         const mydata= state.cart.filter(key=>key.id==actions.payload.id);
//         if (mydata.length>=1)
//         {
//             alert("This Product Aleready Added!");
//         }
//         else 
//         {
//             state.cart.push(actions.payload);
//         } 
//         },

//         qtyIncr:(state, actions)=>{
//             for (var i=0; i<state.cart.length; i++)
//             {
//                 if (state.cart[i].id==actions.payload.id)
//                 {
//                     state.cart[i].qnty++;
//                 }
//             }
//         },

//         qtyDecr:(state, actions)=>{
//             for (var i=0; i<state.cart.length; i++)
//             {
//                 if (state.cart[i].id==actions.payload.id)
//                 {
//                     if (state.cart[i].qnty<=1)
//                     {
//                         alert("Quantity not less than 1")
//                     }
//                     else 
//                     {
//                       state.cart[i].qnty--;
//                     }
                    
//                 }
//             }
//         },

//         proRemove:(state, actions)=>{
//             state.cart= state.cart.filter(key=>key.id!=actions.payload.id);
//         }
//     }
// })

// export const {addToCart, qtyIncr, qtyDecr, proRemove} = cartSlice.actions;
// export default cartSlice.reducer;




  
let clickme=()=>{
    let display1=document.querySelector("#show")
    if(display1.style.display==='none'){
        display1.style.display='block';
     }
     else{
        display1.style.display='none';
     }
    
}
let clickme1=()=>{
    let display3=document.querySelector("#show1")
    if(display3.style.display==='none'){
        display3.style.display='block';
     }
     else{
        display3.style.display='none';
     }
    
}
let clickme2=()=>{
    let display2=document.querySelector("#show2")
    if(display2.style.display==='none'){
        display2.style.display='block';
     }
     else{
        display2.style.display='none';
     }
    
}

let booknow=()=>{
   if(localStorage.getItem("name")){
      location.href="bookform.html"
   }
   else{
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Please First Signup !",
         footer: '<a href="form.html">Go to Signup Page</a>'

         })
      }
}

let logout=()=>{
   localStorage.clear();
}

let sing=()=>{
   location.href="form.html"
}

 let view=()=>{
   // location.href="form.html";
   Swal.fire({
      icon: "success",
      title: "Done",
      text: "Please First Signup !",
      footer: '<a href="form.html">Go to Signup Page</a>'
    });
 }
