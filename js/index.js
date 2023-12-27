// alert("Website is currently in development")

document.addEventListener("DOMContentLoaded", ()=>{
    listeners();
    goToSchoolLink();
    copyText();
})
function copyToClipboard(textToCopy, type) {
    let clicked = false;
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the value of the textarea to the text you want to copy
    textarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    if(type == "email"){
        let ico = document.querySelector(`#copyEmail`);
        let btn = document.querySelector(".copy-text[data-info='email']");
        let text = document.querySelector(".email");

        if(document.querySelector(`#copyPhone`).innerText == "done"){
            document.querySelector(`#copyPhone`).innerText = "content_copy";
            document.querySelector(".copy-text[data-info='phone']").classList.remove("copied");
            document.querySelector(".phone-num").classList.remove("text-copied");
        }

        btn.classList.add("copied");
        text.classList.add("text-copied")

        ico.innerText = "done";

        setTimeout(()=>{
            ico.innerText = "content_copy";
            btn.classList.remove("copied");
            text.classList.remove("text-copied");
        },5000)
    }
    else{
        let ico = document.querySelector(`#copyPhone`);
        let btn = document.querySelector(".copy-text[data-info='phone']");
        let text = document.querySelector(".phone-num");

        if(document.querySelector(`#copyEmail`).innerText == "done"){
            document.querySelector(`#copyEmail`).innerText = "content_copy";
            document.querySelector(".copy-text[data-info='email']").classList.remove("copied");
            document.querySelector(".email").classList.remove("text-copied");
        }

        btn.classList.add("copied");

        ico.innerText = "done";
        text.classList.add("text-copied")

        setTimeout(()=>{
            ico.innerText = "content_copy";
            btn.classList.remove("copied");
            text.classList.remove("text-copied");
        },5000)
    }
}

function listeners(){
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

function goToSchoolLink(){
    let schools = document.querySelectorAll(".education-btn");

    schools.forEach(school=>{
        
        school.addEventListener("click", ()=>{
            if(school.dataset.school == "bsu"){
                window.open("https://www.bulsu.edu.ph", "_blank");
            }
            else if(school.dataset.school == "yanga"){
                window.open("https://dyci.edu.ph", "_blank");
            }
        })
        
    })
}

function copyText(){
    let btns = document.querySelectorAll(".copy-text");

    btns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if(btn.dataset.info == "email") copyToClipboard("clarence.coronel.r@gmail.com", "email");
            else if(btn.dataset.info == "phone") copyToClipboard("0967 599 8955", "phone");
        });
    });
}
