// 画像切り替え
let imagelist = document.querySelectorAll(".goods__item")
let mainimage = document.querySelector(".goods__main");
console.log(imagelist)
for(let i=0;i<imagelist.length;i++){
    imagelist[i].addEventListener("click",function(){
        let code = imagelist[i].getAttribute("src");
        mainimage.setAttribute("src",code)
    })
}


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




// sold out
let a = document.querySelectorAll(".sale");
for(let i=0;i<a.length;i++){
    let text = a[i].innerHTML;
    if(text =="true"){
        a[i].remove();
    }else{
        a[i].innerText="sold out"
    }
}