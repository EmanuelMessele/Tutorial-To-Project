 // we will be getting our transcripts from the youtube api and sending it over to OpenAi here

 const express = require('express') // express for the first time to make http requests more convenient
 const cors = require('cors') // this will let our backend and front end talk : bypass CORS policy
 const app = express() // creating the server here is so much simpler than without Express
 const { getTranscript } = require("youtube-transcript") // here we will just get the one method we need from this object
 const PORT = 5000

 
app.use(cors()) // pass CORS policy
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

app.post("/api/transcript", (req,res) => { // we dont have to check for the type of request if we use express
    // learn how to handle the request using express
    console.log("We made it into the POST")
    console.log("req.body", req.body) // comma vs the plus sign 

    // youtube api send 
    const { link } = req.body // another example of destructuring, instead it would be link = req.body.link
    const videoID = getVidID(link)
});

function getVidID(link){
    // goal of this function is to get our id to then send over, id helps find the right video
    
}

app.listen(PORT, () => {
    console.log(`Example app listening at http:localhost:${PORT}`)
}); 