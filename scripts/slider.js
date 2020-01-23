const wrapper = document.getElementById("wrapper");

let img = ["public/images/presentation.jpg", "public/images/boutique.jpg", "public/images/blog.jpg", "public/images/contact.jpg"];
let i = 0;
let leftarrow = document.getElementById('left-arrow');
let rightarrow = document.getElementById('right-arrow');

wrapper.innerHTML = "<img src = '"+img[i]+"'>";

leftarrow.addEventListener('click', left)
    function left(){
        if (i > 0){
        i--
    }
    else {
        i = img.length-1
    }
    wrapper.innerHTML = "<img src = '"+img[i]+"'>"
    }

rightarrow.addEventListener('click', right)
    function right(){
    if (i >= img.length-1){
        i = 0;
    }
    else {
        i++
    }
    wrapper.innerHTML = "<img src = '"+img[i]+"'>"
    }