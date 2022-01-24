const cards = document.querySelector(".cards");

let a = localStorage.getItem("blog");
let split = JSON.parse(a);
let informations = split.sort().reverse();



function view(info, idx) {
    let div = document.createElement('div');
    div.innerHTML = `<div class="card">
 <a class="card-img" href="edit_blog.html?id=${idx}"><img src="${info.image}" alt="Image"></a>
 <div class="card-details">
 <a href="edit_blog.html?id=${idx}" class="card-title">${info.Title}</a> 
 <div class="card-icons"> <div class="icon">
 <i class="ti-heart"></i><span class="icon-number">${info.like}</span></div><div class="icon">
  </div>`;

    cards.appendChild(div);
}
informations.forEach((message, idx) => {
    view(message, idx);


})