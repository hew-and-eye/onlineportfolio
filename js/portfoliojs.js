let scrolledHeaderHeight = 0;
let contentScrollIndex = 0;
let clientHeight = window.innerHeight;
let adjustFixedScrollbar = function (evt, marginIndex) {
    //console.log("client height: " + clientHeight);
    //console.log("scrollTop: " + document.getElementById("scrolltop-scroller").scrollTop);
    scrolledHeaderHeight = Math.min(clientHeight * 0.12, document.getElementById("scrolltop-scroller").scrollTop);
    //console.log("height before: " + document.getElementById("scrolled-header").style.height );
    document.getElementById("scrolled-header").style.height = scrolledHeaderHeight + "px";
    //console.log("height before: " + document.getElementById("scrolled-header").style.height );
    // if(document.body.scrollTop < clientHeight*0.4)
    //     document.getElementById("content-scroller").style.marginLeft = 0;
};

let scrollDownFlag = false;
let scrollDown = function (evt, marginIndex) {
    if(scrollDownFlag) {
    //scrollInterval = function () {
        //console.log("scrolling...");
        if(marginIndex > -1)
            document.getElementById("content-scroller").style.marginLeft = (-marginIndex * 100) + "vw";
        document.getElementById("scrolltop-scroller").scrollTo(0, document.getElementById("scrolltop-scroller").scrollTop + 10);
        setTimeout(scrollDown, 10);
        if (document.getElementById("scrolltop-scroller").scrollTop >= document.getElementById("profile-banner").offsetHeight - 10) {
            //document.getElementById("scrolltop-scroller").scrollTo(0, clientHeight);
            //console.log(document.getElementById("scrolltop-scroller").scrollTop - document.getElementById("profile-banner").height);
            //setTimeout(scrollDown, 10);
            scrollDownFlag = false;
            return;
            //document.getElementById("content-scroller").style.marginLeft = (-marginIndex * 100) + "vw";
        }
    }
        // else { return; }
        //window.scrollTo(0, window.scrollTop);
        //console.log("hi");
    //}
    //let id = setInterval(scrollInterval, 1);
    //scrollInterval();
}
document.getElementById("scrolltop-scroller").addEventListener("scroll", (event) => { adjustFixedScrollbar(event, 1); });
document.getElementById("projects-scroller").addEventListener("scroll", (event) => {scrollDownFlag = true; scrollDown(event, -1)});
document.getElementById("home-tab").addEventListener("click", (event) => { document.getElementById("content-scroller").style.marginLeft = 0; });
document.getElementById("about-tab").addEventListener("click", (event) => {scrollDownFlag = true; scrollDown(event, 1)});
document.getElementById("skills-tab").addEventListener("click", (event) => {scrollDownFlag = true; scrollDown(event, 2) });
document.getElementById("projects-tab").addEventListener("click", (event) => {scrollDownFlag = true; scrollDown(event, 3); });
document.getElementById("work-tab").addEventListener("click", (event) => {scrollDownFlag = true; scrollDown(event, 4); });

document.getElementById("prev-tab").addEventListener("click", (event) => {
    if(contentScrollIndex > 0)
        contentScrollIndex--;
    else contentScrollIndex = 4;
    document.getElementById("content-scroller").style.marginLeft = (-contentScrollIndex * 100) + "vw";
    scrollDownFlag = true;
    scrollDown(event, -1);
 });

 document.getElementById("next-tab").addEventListener("click", (event) => {
    if(contentScrollIndex < 4)
        contentScrollIndex++;
    else contentScrollIndex = 0;
    document.getElementById("content-scroller").style.marginLeft = (-contentScrollIndex * 100) + "vw";
    scrollDownFlag = true;
    scrollDown(event, -1);
 });

window.onload = function () {
    //document.getElementById("default-focus").focus();
    //document.getElementById("about-tab").blur();
}