// alert("Website is currently in development")

document.addEventListener("DOMContentLoaded", ()=>{
    listeners();
})

function copyToClipboard() {
    // Get the text to copy
    var textToCopy = document.querySelector("main").innerText;

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

    // Provide some visual feedback (optional)
    alert("Text copied to clipboard: " + textToCopy);
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
