const inputs = document.querySelectorAll("input")
const inputname = inputs[0]
const inputpass = inputs[1]
const inputcon = inputs[2]
const text = document.querySelector("p")
const btn = document.querySelector("button")



inputname.addEventListener("input", function(){
   if(inputname.value.length<3){
    text.classList.add("active")
    text.textContent= "magacagu haka bato 2 xaraf"
    inputname.classList.add("Error")

   } else if(inputname.value.length>10){
      text.classList.add("active")
      text.textContent= "soo gaabi magaca fadlan!"
      inputname.classList.add("Error")
   }

   else{
      text.classList.remove("active")
      inputname.classList.remove("Error")
   
   }
})


inputpass.addEventListener("input", () => {
   if(inputpass.value.length<4){
       text.classList.add("active")
    text.textContent= "passwordkaagu haka bato 4 god"
    inputpass.classList.add("Error")
   } else{
      text.classList.remove("active")
      inputpass.classList.remove("Error")
   }
})


inputcon.addEventListener("input", ()=>{
   if(inputpass.value!==inputcon.value){
      text.classList.add("active")
      text.textContent= "isku mid maaha labada password"
      inputcon.classList.add("Error")
     }else{
      text.classList.remove("active")
      inputcon.classList.remove("Error")
     }
   }
)

btn.addEventListener("click", ()=>{
   if(inputname.value===""&& inputpass.value===""&& inputcon.value===""){
      text.classList.add("active")
      text.textContent="buuxi meelaha banaan"
      inputs.forEach((input) =>{
         input.classList.toggle("Error")
      
      })

   } else{
      text.classList.remove("active")
      inputs.classList.remove("Error")
   }
})

btn.addEventListener("click", () => {
    pop.classList.toggle("active")
    if(pop.className === "pop active"){
       setTimeout(() => {
    pop.classList.remove("active")
}, 4000);
    }
})




