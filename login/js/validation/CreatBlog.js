var url;
document.querySelector("#image").addEventListener("change", function() {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {
        url = image.result;

    })
});

function ceatBlog(event) {
    event.preventDefault();
    var title = document.getElementById("title");
    var image = document.getElementById("image");
    var message = document.getElementById("body");

    var image_invalid = document.getElementById("image_invalid");

    var title_invalid = document.getElementById("title_invalid");
    var blog_invalid = document.getElementById("body");

    if (title.value == "" && message.value == "" && image.value == "") {
        title.style.border = "solid 1px red";
        image.style.border = "solid 1px red";
        message.style.border = "solid 1px red";

        image_invalid.style.display = "block";
        blog_invalid.style.display = "block";
        title_invalid.style.display = "block";

    } else {
        var obj = {
            Title: title.value,
            message: message.value,
            image: url,
            comments: [],
            like: 0

        }
        let bloges = localStorage.getItem("blog");
        if (bloges) {
            var converBlog = JSON.parse(bloges);
            converBlog.push(obj);
            localStorage.setItem("blog", JSON.stringify(converBlog));
            alert("do you want to creat blog");
            window.location.href = "index.html";
        } else {
            var blogArray = [obj];
            localStorage.setItem("blog", JSON.stringify(blogArray));
            console.log(blogArray);
            alert("created well");
            window.location.href = "index.html";
        }

    }

}