let htmlInput = document.querySelector(".html-editor textarea")
let CssInput = document.querySelector(".css-editor textarea")
let jsInput = document.querySelector(".js-editor textarea")

let save = document.querySelector("#save-icon")
let output = document.querySelector("#output")
let full = document.querySelector("#fullscreen")
let outputContainer = document.querySelector(".output-container")
let copy = document.querySelectorAll(".copy")

save.addEventListener("click",()=>{
    output.contentDocument.body.innerHTML = htmlInput.value
    output.contentDocument.head.innerHTML = `<style>${CssInput.value}</style>`
    output.contentWindow.eval(jsInput.value)
})

full.addEventListener("click",()=>{
    outputContainer.classList.toggle("output-fullscreen-active")

    if(outputContainer.classList.contains("output-fullscreen-active")){
    full.style.transform = "rotate(180deg)"
    }
    else{
    full.style.transform = "rotate(0deg)"
      }
    
})

copy.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("copy1")) {
            navigator.clipboard.writeText(htmlInput.value);
        } 
        else if (e.classList.contains("copy2")) {  
            navigator.clipboard.writeText(CssInput.value);
        } 
        else {
            navigator.clipboard.writeText(jsInput.value);
        }

        
    });
});

document.querySelectorAll(".toggle_theme").forEach((btn)=>{
    btn.addEventListener("click",()=>{
        document.body.classList.toggle("dark-mode")
        console.log("Dark mode toggled!"); // Debugging ke liye
    })
})

// console.log(htmlInput.value)