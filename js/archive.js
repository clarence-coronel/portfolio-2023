document.addEventListener("DOMContentLoaded", ()=>{
    spotlightCursor()
    addBackBtn();
})

function spotlightCursor(){
    let light = document.getElementById('light');

    document.addEventListener('mousemove', function(event) {
        // Get the mouse coordinates
        var mouseX = event.clientX;
        var mouseY = event.clientY;
    
        // Update the position of the circular div
        light.style.left = mouseX - light.offsetWidth / 2 + 'px';
        light.style.top = mouseY - light.offsetHeight / 2 + 'px';
    });
}

function addBackBtn(){
    let btn = document.querySelector(".back-btn");

    btn.addEventListener("click", ()=>{
        window.open("./../index.html");
    });
}