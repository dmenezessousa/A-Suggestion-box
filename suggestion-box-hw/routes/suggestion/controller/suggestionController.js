const Suggestion = require("../modal/Suggestion.js");

module.exports = {
    //get = uses .find
    //GET ALL
    getAllSuggestions:(body,callback)=>{
        Suggestion.find(body,(err,foundAllSuggestions)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, foundAllSuggestions);
            }
        });
    },

    //GET ONE
    getOneSuggestion:(id,body,callback)=>{
        Suggestion.find(id,body,(err,foundSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, foundSuggestion);
            }
        });
    },

    //POST = uses .save
    createSuggestion:(body,callback)=>{
        //create a new Array of Objects
        const createdSuggestion = new Suggestion({
            tittle: body.tittle,
            author: body.author,
            suggestion: body.suggestion,
        });

        createdSuggestion.save((err,savedSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, savedSuggestion);
            }
        });
    },

    //Update = uses.findByIdAndUpdate
    updateSuggestion:(id,body,callback)=>{
        Suggestion.findByIdAndUpdate(id,body,{new:true},(err,updateSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, updateSuggestion);
            }
        });
    },

    //DELETE = uses .findByIdAndDelete
    deleteSuggestion:(id,callback)=>{
        Suggestion.findByIdAndDelete(id,(err,deletedSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, deletedSuggestion);
            };
        });
    }
};