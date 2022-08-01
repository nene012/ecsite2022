// more
let item = document.querySelectorAll(".goods-top");
let n = 0;
let btn = document.querySelector(".more");
item[item.length - 1].classList.add("remove");
btn.addEventListener("click", function () {
if (n == 0) {
item[item.length - 1].classList.remove("remove");
n = 1;
btn.innerText = "close";
} else {
item[item.length - 1].classList.add("remove");
n = 0;
btn.innerText = "more";
}
});


// 画像切替
let aImg = document.querySelectorAll(".A")
let bImg = document.querySelector(".B");
for (let i = 0; i < aImg.length; i++) {
aImg[i].addEventListener("click", function () {
let code = aImg[i].getAttribute("src");
bImg.setAttribute("src", code)
})
}


// sold out
let a = document.querySelectorAll(".sale");
for(let i=0;i<a.length;i++){
    let text = a[i].innerHTML;
    if(text =="true"){
        a[i].innerText="sale"
    }else{
        a[i].innerText="sold out"
    }
}