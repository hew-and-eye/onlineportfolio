let scrolledHeaderHeight = 0;
let contentScrollIndex = 0;
let clientHeight = window.innerHeight;
let adjustFixedScrollbar = function (evt, marginIndex) {
    scrolledHeaderHeight = Math.min(clientHeight * 0.12, document.body.scrollTop);
    document.getElementById("scrolled-header").style.height = scrolledHeaderHeight + "px";
    // if(document.body.scrollTop < clientHeight*0.4)
    //     document.getElementById("content-scroller").style.marginLeft = 0;
};

let scrollDown = function (evt, marginIndex) {
    scrollInterval = function () {
        window.scrollTo(0, document.body.scrollTop + 10);
        if (document.body.scrollTop + clientHeight >= document.body.offsetHeight - 10) {
            window.scrollTo(0, clientHeight);
            //console.log("yo");
            clearInterval(id);
            //document.getElementById("content-scroller").style.marginLeft = (-marginIndex * 100) + "vw";
        }
        if(marginIndex > -1)
            document.getElementById("content-scroller").style.marginLeft = (-marginIndex * 100) + "vw";
        //window.scrollTo(0, window.scrollTop);
        //console.log("hi");
    }
    let id = setInterval(scrollInterval, 1);
}
window.addEventListener("scroll", (event) => { adjustFixedScrollbar(event, 1) });
document.getElementById("projects-scroller").addEventListener("scroll", (event) => {scrollDown(event, -1)});
document.getElementById("home-tab").addEventListener("click", (event) => { document.getElementById("content-scroller").style.marginLeft = 0; });
document.getElementById("about-tab").addEventListener("click", (event) => {scrollDown(event, 1)});
document.getElementById("skills-tab").addEventListener("click", (event) => { scrollDown(event, 2) });
document.getElementById("projects-tab").addEventListener("click", (event) => { scrollDown(event, 3); });
document.getElementById("work-tab").addEventListener("click", (event) => { scrollDown(event, 4); });

document.getElementById("prev-tab").addEventListener("click", (event) => {
    if(contentScrollIndex > 0)
        contentScrollIndex--;
    else contentScrollIndex = 4;
    document.getElementById("content-scroller").style.marginLeft = (-contentScrollIndex * 100) + "vw";
    scrollDown(event, -1);
 });

 document.getElementById("next-tab").addEventListener("click", (event) => {
    if(contentScrollIndex < 4)
        contentScrollIndex++;
    else contentScrollIndex = 0;
    document.getElementById("content-scroller").style.marginLeft = (-contentScrollIndex * 100) + "vw";
    scrollDown(event, -1);
 });

window.onload = function () {
    document.getElementById("default-focus").focus();
    document.getElementById("about-tab").blur();
}