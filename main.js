const btnmem = document.querySelector("button#btn")
const pop = document.querySelector("div.pop")
const call = document.querySelector("button.btnh")



console.log(call)

btnmem.addEventListener("click", () => {
    pop.classList.toggle("active")
    if(pop.className === "pop active"){
       setTimeout(() => {
    pop.classList.remove("active")
}, 4000);
    }
})

call.addEventListener("click", ()=>{

        pop.classList.toggle("active")
    if(pop.className === "pop active"){
       setTimeout(() => {
    pop.classList.remove("active")
}, 4000);
    }
})


