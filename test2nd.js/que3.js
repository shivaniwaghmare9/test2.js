
let shiv=()=>{
    let change=document.querySelector("#show")
    let change1=document.querySelector("#show2")
    if(change.style.display==="none")
    {
        change.style.display="block";
        change1.innerHTML="HIDE"
    }
     else
        {
            change.style.display="none";
            change1.innerHTML="SHOW"
        }
}