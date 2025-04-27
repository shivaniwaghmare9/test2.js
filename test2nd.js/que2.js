

let show=()=>{
    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value

    let nameerr=document.querySelector("#errname")
    let emailerr=document.querySelector("#erremail")

    if(inpname=="")
    {
        nameerr.innerHTML="please enter name";
        nameerr.style.color="red";
        return false;
    }
    if(inpemail=="")
    {
          nameerr.innerHTML=""
           emailerr.innerHTML="please enter email";
           emailerr.style.color="red";
           return false;
    }

    else if(!(inpemail.includes(".com") && inpemail.includes("@")))
    {
        emailerr.innerHTML="please enter valid email";
        emailerr.style.color="red";
        return false;
    }
}