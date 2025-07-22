 // we will be getting our transcripts from the youtube api and sending it over to OpenAi here



//  const express = require('express') // express for the first time to make http requests more convenient
//  const cors = require('cors') // this will let our backend and front end talk : bypass CORS policy
 import express from 'express'
 import cors from 'cors'
 const app = express() // creating the server here is so much simpler than without Express
 const PORT = 5000
 import TranscriptClient from 'youtube-transcript-api'
 const client = new TranscriptClient({
    headers: {
         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
    }
 }); 
 const readyPromise = client.ready
 
 
app.use(cors()) // pass CORS policy
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

(async ()=>{
    await readyPromise;
    console.log("TrancriptLient Ready") // better to do this here than for every post request
})();

app.post("/api/transcript", async (req,res) => { // we dont have to check for the type of request if we use express
    // learn how to handle the request using express
    console.log("We made it into the POST")
    console.log("req.body", req.body) // comma vs the plus sign 

    // getting our video id
    const { link } = req.body // another example of destructuring, instead it would be link = req.body.link
    console.log(link)
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S*?v=|(?:v|embed|shorts|watch)\S*?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(regex)
    const videoID = match ? match[1]: null

     if (!videoID){
        return res.status(400).json({error: "invalid link"});
     }
    
    try{
    //await client.ready; // from user github
    await readyPromise;
    const transcript = await client.getTranscript(videoID)
    } catch(err) {
        console.log("error getting trans:", err)
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});