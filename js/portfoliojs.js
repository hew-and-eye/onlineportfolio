let scrolledHeaderHeight = 0;
let clientHeight = window.innerHeight;
let adjustFixedScrollbar = function () {
    scrolledHeaderHeight = Math.min(clientHeight * 0.12, document.body.scrollTop);
    document.getElementById("scrolled-header").style.height = scrolledHeaderHeight + "px";
};

let scrollDown = function () {
    scrollInterval = function () {
        window.scrollTo(0, document.body.scrollTop + 10);
        if (document.body.scrollTop + clientHeight >= document.body.offsetHeight-10) {
            console.log("yo");
            clearInterval(id);
        }
        //console.log("hi");
    }
    let id = setInterval(scrollInterval, 1);
}
window.addEventListener("scroll", adjustFixedScrollbar);
document.getElementById("about-tab").addEventListener("focus", scrollDown);