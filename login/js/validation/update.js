const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
let BlogEdity = document.querySelector("#blog_form");
let rightBlog = document.querySelector(".recommended-list");
const getblog = JSON.parse(localStorage.getItem("blog")).sort().reverse();
let message = getblog[id];
console.log(message);
var url;

let div = document.createElement('div');
div.innerHTML = `
        <form  id="blog_form" onsubmit="update(event)">
                    <h2 class="dashboard-title">Edit a blog</h2>
                    <div class="alert alert-danger">

                    </div>
                    <div class="alert alert-success">

                    </div>
                    <div class="form-group">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" id="Title" class="form-input" value=" ${message.Title}"/>
                    </div>
                    <div class="form-group">
                        <label for="image">Blog Image</label>
                        <input type="file" id="image"  class="form-input" placeholder="Image URL"/>
                       
                   <img src="${message.image}" class="article-image" />
                    </div>
                    <div class="form-group">
                        <label for="body" class="form-label">Blog content</label>
                        <textarea name="" id="message"  cols="30" rows="10" class="form-input"required>${message.message}</textarea>
                    </div>
                    <button class="btn btn-primary" type="submit" id="submit">Update</button>
                </form>
                <div class="article-icon">
                    <div class="icon">
                        <span class="ti-heart icon-article"></span>
                        <span class="icon-number">${message.like}</span>
                    </div>
                    <div class="icon">
                        
                    </div>
        `;
BlogEdity.appendChild(div);



message.comments.forEach((comment) => {
    console.log(message.comments);
    let BlogComment = document.querySelector(".comments");
    let div = document.createElement('div');

    div.innerHTML = `
<h3 class="comments-title">Comments</h3>
<div class="comments">
    <div class="comment">
        <h3 class="comment-name">${comment.Name}</h3>
        <div class="comment-body">
        ${comment.message}
        </div>
    </div> `;
    BlogComment.appendChild(div);
});


document.querySelector("#image").addEventListener("change", function() {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {
        url = image.result;

    })
});


function update(event) {
    event.preventDefault();

    let image1 = message.image;
    var title = document.getElementById("Title").value;
    var image = document.getElementById("image").value;
    var content = document.getElementById("message").value;
    if (image) {
        getblog[id] = {...getblog[id], Title: title, image: url, message: content }
        localStorage.setItem("blog", JSON.stringify(getblog.sort().reverse()));
        alert("do you want to update");
        window.location.href = "index.html";

    }
    getblog[id] = {...getblog[id], Title: title, message: content }
    localStorage.setItem("blog", JSON.stringify(getblog.sort().reverse()));
    alert("do you want to update");
    window.location.href = "index.html";

}

function deleteone(event) {
    event.preventDefault();
    getblog[id];
    console.log(getblog.splice(id, 0));
    if (getblog.splice(id, 1)) {
        alert("do you want to delete");
        localStorage.setItem("blog", JSON.stringify(getblog.sort().reverse()));
        window.location.href = "index.html";

    }


}