

let signup=()=>{


    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value
    let inppassword=document.querySelector("#pass").value

    let errname=document.querySelector("#errname")
    let erremail=document.querySelector("#errname")
    let errpassword=document.querySelector("#email")

    if(inpname==""){
        errname.innerHTML="Please enter name"
        return false;
    }
    if(inpname==""){
        erremail.innerHTML="Please enter name"
        return false;
    }
    if(inpname==""){
        errpassword.innerHTML="Please enter name"
        return false;
    }

    localStorage.setItem("name",inpname)
    localStorage.setItem("email",inpemail)
    localStorage.setItem("pass",inppassword)
    
     location.href="Locallogin.html"
     return false;


}    

let login=()=>{
    let loginname=document.querySelector("#logininp").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("pass")

    if(loginname==localname && loginpass==localpass){
        location.href="localHome.html"
    }
    else{
        alert("invalid username or password")

        return false;
    }


}