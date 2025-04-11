import express from "express";
import path from 'path'
const PORT=process.env.PORT
const app =express();
app.listen(PORT,()=>{

})
app.set("view engine","ejs")
import routerx from "./router/auth.js"
app.use("/hey",routerx);







const csssfile =path.join(import.meta.dirname,"frontend")
app.use(express.static(csssfile))
//route
app.get("/",(req,res)=>{
    const htmlpage=path.join(import.meta.dirname,"frontend","index.html")
    res.sendFile(htmlpage)
    
})


app.get("/profile/:id/hey/:slugid",(req,res)=>{
    console.log(req.params);
    res.send(`id is a :- ${req.params.id}    and slugid id a  
        
        
        
        
        ${req.params.slugid.replace(/-/g," ")}`)
    
})


app.get("/product",(req,res)=>{
    console.log(req.query)
    res.send("its query product")

})


//middleware 
app.use(express.urlencoded({extended:true}))
app.post("/contact",(req,res)=>{
    console.log(req.body);
    res.redirect("/")
    })

app.use((req,res)=>{
   
    res.status(404).sendFile(path.join(import.meta.dirname,"view","404.html"))
})
//template engine

