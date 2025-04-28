

let aoo=[
    {
        name:"Shivani",
        age:23,
        city:"Bhopal"
    },
    {
        name:"vani",
        age:22,
        city:"Satana"
    },
    {
        name:"Shiv",
        age:24,
        city:"Riva"
    },
    {
        name:"Shiva",
        age:21,
        city:"Pune"
    },
    {
        name:"Shivangi",
        age:23,
        city:"Bnaglore"
    }
]

let show=document.querySelector("#display");
aoo.map((e)=>{
    show.innerHTML+=
    `
    <tr>
       <td>${e.name}</td>
       <td>${e.age}</td>
       <td>${e.city}</td>
    </tr>
    `


})