const delbtnArr=document.querySelectorAll(".item button")

delbtnArr.forEach((btn)=>{
 btn.addEventListener("click",deleteRecord)
})

const spanBtnArr=document.querySelectorAll(".item span")

spanBtnArr.forEach((span)=>{
 span.addEventListener("click",doneList)
})


const uncheckArr=document.querySelectorAll(".item .strike")

uncheckArr.forEach((span)=>{
    span.addEventListener("click",markUncomplete)
   })


async function markUncomplete() {
    
    const spantext=this.innerText
    try{
        const response= await fetch("taskuncomplete",{
            method: "put",
            headers:{"Content-Type":"application/json" },
            body:JSON.stringify({
                "itemFromJS": spantext
            } )
           } )
          
         .then((response)=>{
           location.reload()
    
         })
       
           
       }
       catch(err){
           console.log(err)
       }
}





async function deleteRecord(){
   const val=this.parentNode.childNodes[1].innerText
   try{
    const response= await fetch("taskdelete",{
        method: "delete",
        headers:{"Content-Type":"application/json" },
        body:JSON.stringify({
            "itemFromJS": val
        } )
       } )
      
     .then((data)=>{
         
       console.log(data)
       location.reload()

     })
       
   }
   catch(err){
       console.log(err)
   }
    
} 


async function doneList(){
    const spantext=this.innerText
    try{
        const response= await fetch("taskupdate",{
            method: "put",
            headers:{"Content-Type":"application/json" },
            body:JSON.stringify({
                "itemFromJS": spantext
            } )
           } )
          
         .then((response)=>{
           location.reload()
    
         })
       
           
       }
       catch(err){
           console.log(err)
       }
        
}
      
   