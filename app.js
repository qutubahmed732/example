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

random.addEventListener("click", () => {
    const nav = document.querySelector("#second-nav");
    nav.style.left = "0px";
    nav.style.display = 'flex';
    document.body.style.overflow = "hidden";
})
let closee = document.querySelector(".close");

closee.addEventListener("click", () => {
    const nav = document.querySelector("#second-nav");
    nav.style.left = "-560px";
    document.body.style.overflow = "visible";
})

let input = document.querySelector("input");

input.addEventListener("focusout", (e) => {
    e.target.value = '';
})

const imageDiv = document.querySelector('.image');
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        const bgImage = card.getAttribute('data-bg'); // Get the data attribute value
        imageDiv.style.backgroundImage = `url(${bgImage})`;
        
    });
});



// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Close other open accordions
    accordionHeaders.forEach(h => {
      if (h !== header) {
        h.classList.remove('active');
        h.nextElementSibling.style.display = 'none';
      }
    });

    // Toggle current accordion
    header.classList.toggle('active');
    const body = header.nextElementSibling;
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
  });
});