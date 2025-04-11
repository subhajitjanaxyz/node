import express from "express";
const app=express();
const router=express.Router();
router.get("/",(req,res)=>{ 
    res.render("report",{subhajit:"<h1>subhajit</h1>",title:"report"})
})
export default router;