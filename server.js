const express=require("express")
const app=express()
const PORT=3001
require("dotenv").config()
let connectionString=process.env.DB_STRING


const MongoClient= require("mongodb").MongoClient
MongoClient.connect(connectionString).then((client)=>{
console.log("Connected to Database")
const db=client.db("toDoTasks")
const taskList=db.collection("taskList")


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))



app.get("/",async (request,response)=>{
    const listOfTasks= taskList.find().toArray()


    .then((results)=>{
      const leftitem= taskList.countDocuments({completed:false})

    .then((result2)=>{
      response.render("index.ejs",{tasks:results,left:result2})
    })
    .catch((error)=>{
        console.log(error)
    })
     
    })
    .catch((error)=>{
       console.error(error)
    })
    
    


 
  })


  app.post("/tasks",(request,response)=>{
    console.log(request.body)
    taskList.insertOne(
        {
            task:request.body.task,
            completed:false
        }
        )
      .then((result)=>{
       response.redirect("/")
      })
      .catch((error)=>{
         console.error(error)
      })

  })


  app.delete("/taskdelete",(request,response)=>{

   taskList.deleteOne({task:request.body.itemFromJS})

    .then((result)=>{
    console.log("Todo Deleted")
    response.json("Deleted")
    
})
.catch((error)=>{
  console.error(error)
})
    })

app.put("/taskupdate",(request,response)=>{

  taskList.findOneAndUpdate({task:request.body.itemFromJS},
    {
      $set:{
        completed:true
      },

    }

  )
  .then((result)=>{
    console.log("Check complete")
    response.json("Updated")
  })
  .catch((error)=>{
    console.log(error)
  })

})

app.put("/taskuncomplete",(request,response)=>{

  taskList.findOneAndUpdate({task:request.body.itemFromJS},
    {
      $set:{
        completed:false
      },

    }

  )
  .then((result)=>{
    console.log("Uncheck complete")
    response.json("Updated")
  })
  .catch((error)=>{
    console.log(error)
  })

})



























app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})



})

.catch(error =>console.error(error))
