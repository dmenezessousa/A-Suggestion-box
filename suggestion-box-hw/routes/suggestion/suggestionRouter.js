const express = require("express");
const router = express.Router();
const suggestionController = require("./controller/suggestionController");

//get all request
router.get("/",(req,res)=>{
    suggestionController.getAllSuggestions(req.body,(err, foundSuggestions)=>{
        if(err){
            res.status(500)
            .json({message: "Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", foundSuggestions});
        }
    });
});

//get one request
router.get("/get-suggestion-by-id/:id",(req,res)=>{
    const {id} = req.params;
    suggestionController.getOneSuggestion(id, (err, deleteSuggestion)=>{
        if(err){
            res
            .status(500)
            .json({message:"Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", deleteSuggestion});
        }
    });
});

//POST request 
router.post("/create-suggestion",(req,res)=>{
    suggestionController.createSuggestion(req.body,(err,savedSuggestion)=>{
        if(err){
            res
            .status(500)
            .json({message:"Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", savedSuggestion});
        }
    });
});

//DELETE request
router.delete("/delete-suggestion-by-id/:id",(req,res)=>{
    const {id} = req.params;
    suggestionController.deleteSuggestion(id, (err, deleteSuggestion)=>{
        if(err){
            res
            .status(500)
            .json({message:"Something went wrong!", error: err.message});
        }else{
            res.json({message: "Success", deleteSuggestion});
        }
    });
});

//UPDATE request
router.put("/update-suggestion-by-id/:id",(req,res)=>{
    const {id} = req.params;
    suggestionController.updateSuggestion(id,req.body,(err, updateSuggestion)=>{
        if(err){
            res.status(500)
            .json({message:"Something went wrong!", error: err.message});
        }else{
            res.json({message: "success", updateSuggestion });
        }
    });
});

module.exports = router;