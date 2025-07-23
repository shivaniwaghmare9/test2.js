

function shiv(){
    let ans=document.querySelector("#btn")
    let ans2=document.querySelector("#btn2")
    if(ans2.style.display==="none"){
        ans2.style.display="block"
        ans.innerHTML="HIDE"
    }

    else{
        ans2.style.display="none"
        ans.innerHTML="SHOW"
    }

}