const button = document.querySelector(".payment__button");
const pay = document.querySelector(".payment__button-title"); 
const process = document.querySelector(".payment-process"); 
const loader =  document.querySelector(".payment-process__loader");  
const check = document.querySelector(".payment-process__check");  

button.addEventListener("click", () => {
    pay.classList.add("hidden");
    process.style.display = "flex";
    process.classList.add("visible")
    setTimeout(() => {
        loader.style.display = "none";
        check.style.display = "block";
    }, 1000)
});