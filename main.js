const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");

div1.addEventListener("click", function () {
    img.src = "images/1.jpg"; 
})
div2.addEventListener("click", function () {
    img.src = "images/2.jpg";
});
div3.addEventListener("click", function () {
    img.src = "images/3.jpg";
});
   
