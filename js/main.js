let btn = document.getElementById('btn');
btn.onclick = function(){
    window.scrollTo(0,0);
}
window.onscroll = function () {
    if (window.scrollY <= 200) {
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
    }
}
