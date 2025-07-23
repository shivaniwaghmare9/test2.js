
// let shiv=()=>{

// let inpname= document.querySelector("#name").value
// let inpemail= document.querySelector("#email").value

// let errname=document.querySelector("#errname")
// let erremail=document.querySelector("#erremail")

// if(inpname==""){
//     errname.innerHTML="please enter the name"
//     errname.style.color="red"
//     return false;
// }

//  else if(!(inpemail.includes('@')&& inpemail.includes(".com"))){
//     erremail.innerHTML="please enter valid email"
//     erremail.style.color="red"
//     return false;
// }
// }

let shiv=()=>{

let inpname= document.querySelector("#name").value
let inpemail= document.querySelector("#email").value

let errname=document.querySelector("#errname")
let erremail=document.querySelector("#erremail")

if(inpname==""){
    errname.innerHTML="please enter the name"
    errname.style.color="red"
    return false;
}

 else if(!(inpemail.includes('@')&& inpemail.includes(".com"))){
    erremail.innerHTML="please enter valid email"
    erremail.style.color="red"
    return false;
}
}

