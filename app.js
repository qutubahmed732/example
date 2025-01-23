// let click = document.querySelectorAll("i");

// click.forEach((item)=>{
//     item.addEventListener("click", (e)=>{
//         if(e.target.textContent == "expand_more"){
//             e.target.textContent = "expand_less";
//         }else {
//             e.target.textContent = "expand_more";
//         }
//         e.target.display.style.transition = "all 0.5s ease";
//     })
// })


let random = document.querySelector(".menu-btn");

random.addEventListener("click", ()=>{
    const nav = document.querySelector("#second-nav");
    nav.style.left = "00px";
    nav.style.display = 'flex';
})
let closee = document.querySelector(".close");

closee.addEventListener("click", ()=>{
    const nav = document.querySelector("#second-nav");
    nav.style.left = "-560px"
})

let input = document.querySelector("input");

input.addEventListener("focusout", (e)=>{
    e.target.value = '';;
})