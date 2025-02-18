

let signup=()=>{


    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value
    let inppassword=document.querySelector("#pass").value

    let errname=document.querySelector("#errname")
    let errmail=document.querySelector("#erremail")
    let errpassword=document.querySelector("#errpass")

    if(inpname==""){
        errname.innerHTML="Please enter name"
        errname.style.color="red"
        return false;
    }
    if(inpemail==""){
        errmail.innerHTML="Please enter Email"
        errmail.style.color="red"
        return false;
    }
    if(inppassword==""){
        errpassword.innerHTML="Please enter password"
        errpassword.style.color="red"
        return false;
    }
    else if(!(inpemail.includes('@') && inpemail.includes(".com"))){
        errmail.innerHTML="Please Enter the Valid E-mail @,.com"
        errmail.style.color="red"
        return false;
     }
     else if(!(inppassword.match([/123456789/])&& inppassword.match([/!@#$%&*.,/])&& inppassword.match([/a-z/]))){
        errpassword.innerHTML="Please Enter Strong Password Write dots,symbols,number"
        errpassword.style.color="red"
        return false;
     }

    localStorage.setItem("name",inpname)
    localStorage.setItem("email",inpemail)
    localStorage.setItem("pass",inppassword)
    
     location.href="Locallogin.html"
     return false;


}    

let loginup=()=>{
    let loginname=document.querySelector("#logininp").value
    let loginpass=document.querySelector("#loginpass").value

    // let errormail=document.querySelector("#errmail")
    // let errorpass=document.querySelector("#errpassw")

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("pass")

    if(loginname==localname && loginpass==localpass){
        location.href="localHome.html"
    }
    else {
        alert("invalid username or password")
       // errorpass.innerHTML="invalid "

        return false;
    }
    

    


}