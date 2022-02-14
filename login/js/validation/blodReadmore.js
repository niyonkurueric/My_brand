const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
let Blog = document.querySelector(".article-details");
let rightBlog = document.querySelector(".recommended-list");
const getblog = JSON.parse(localStorage.getItem("blog")).sort().reverse();
let check = localStorage.getItem("blog");
var Readmessage = getblog[id];
console.log("this is check" + check[id])
Blog.innerHTML = `     
        <img src="${Readmessage.image}" class="article-image" />
            <div class="article-content">
                <h2 class="article-title">
                ${Readmessage.Title}
                </h2>
                <p class="article-text">
                ${Readmessage.message}
                </p>
                <div class="article-icon">
                    <div class="icon">
                        <span class="ti-heart icon-article" onclick="like(event)"></span>
                        <span class="icon-number">${Readmessage.like}</span>
                    </div>
                </div>
                <div class="article-comments">
                   <h3 class="comments-title">Comments</h3>
                   
                    </div>
                    <form class="comment-form" onsubmit="commet(event)">
                        <div class="form-group">
                            <input type="text" id="name" class="form-input" placeholder="Names" />
                            <span class="text-invalid" id="Name_invalid">invalid Name</span>
                        </div>
                        <div class="form-group">
                            <textarea name="" id="message" class="form-input" placeholder="Leave a comment..."></textarea>
                            <span class="text-invalid" id="message">invalid Message</span>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
            
        `;
let BlogComment = document.querySelector(".article-comments");
let div = document.createElement('div');

Readmessage.comments.forEach((comment) => {
    let BlogComment = document.querySelector(".article-comments");
    let div = document.createElement('div');

    div.innerHTML = `
<div class="comments">
    <div class="comment">
        <h3 class="comment-name">${comment.Name}</h3>
        <div class="comment-body">
        ${comment.message}
        </div>
    </div> `;
    BlogComment.appendChild(div);
});



getblog.forEach((Readmessage, idx) => {
    if (!(idx == id)) {
        let div = document.createElement('div');
        div.innerHTML = `
        <a href="#" class="recommended-article">
                    <img src="${Readmessage.image}" class="recommended-image" />
                    <div class="recommended-title">
                    ${Readmessage.Title}
                    </div>
                </a>
        `;
        rightBlog.appendChild(div);

    }
});

function commet(event) {
    event.preventDefault();
    var fname = document.getElementById("name");
    var message = document.getElementById("message");

    var Name_invalid = document.getElementById("Name_invalid");
    var Message_invalid = document.getElementById("message");
    const bloges = JSON.parse(localStorage.getItem("blog")).sort().reverse();

    bloges.forEach((Element, idx) => {
        if (id == idx) {
            var Commentobj = {
                Name: fname.value,
                message: message.value
            }
            Element.comments.push(Commentobj);

        }

    })
    var pushex = JSON.stringify(bloges);
    localStorage.setItem("blog", pushex);
    window.location.reload();

}

function like(event) {
    event.preventDefault();
    var a = Readmessage.like += 1;

    getblog[id] = Readmessage;
    localStorage.setItem("blog", JSON.stringify(getblog.sort().reverse()));
    window.location.reload();
}