
let shiv=()=>{
    let change=document.querySelector("#btn1")
    let change1=document.querySelector("#btn2")
    let change2=document.querySelector("#btn3")

    let h11=Math.floor(Math.random()*6)+1;
    let h12=Math.floor(Math.random()*6)+1;
    let h13=Math.floor(Math.random()*6)+1;

    change.innerHTML=h11;
    change1.innerHTML=h12;
    change2.innerHTML=h13;
}