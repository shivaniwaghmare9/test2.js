


function shiv(){
  let ans=document.querySelector("#btn1")
  let ans1=document.querySelector("#btn2")
  let ans2=document.querySelector("#btn3")

  let show1=Math.floor(Math.random()*6)+1;
  let show2=Math.floor(Math.random()*6)+1;
  let show3=Math.floor(Math.random()*6)+1;

  ans.innerHTML=show1;
  ans1.innerHTML=show2;
  ans2.innerHTML=show3;
  
}

 
// let aoo=[
//   {
//     name:"shivani",
//     age:23,
//     city:"bhopal"
//   },{
//     name:"shii",
//     age:24,
//     city:"indore"
//   },{
//     name:"shiv",
//     age:25,
//     city:"pune"
//   }
// ]
//  let show1=document.querySelector("#show");
 
//   aoo.map((e)=>{
//     show1.innerHTML+=
//     `
//     <tr>
//       <td>${e.name}</td>
//       <td>${e.age}</td>
//       <td>${e.city}</td>
//     </tr>
//     `

//   })
