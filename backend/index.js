 // we will be getting our transcripts from the youtube api and sending it over to OpenAi here

 const express = require('express') // express for the first time to make http requests more convenient
 const cors = require('cors') // this will let our backend and front end talk : bypass CORS policy
 const app = express() // creating the server here is so much simpler than without Express
 const TranscriptAPI = require("youtube-transcript-api")
 const PORT = 5000

 
app.use(cors()) // pass CORS policy
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

app.post("/api/transcript", async (req,res) => { // we dont have to check for the type of request if we use express
    // learn how to handle the request using express
    console.log("We made it into the POST")
    console.log("req.body", req.body) // comma vs the plus sign 

    console.log('Youtube API Object:', TranscriptAPI)
    console.log('Youtube API All Methods:', Object.getOwnPropertyNames(TranscriptAPI))

    // youtube api send 
    const { link } = req.body // another example of destructuring, instead it would be link = req.body.link
   
    videoID = getVideoID(link)
    // try this new package out
});

function getVideoID(link){
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S*?v=|(?:v|embed|shorts|watch)\S*?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(regex);
    return match ? match[1] : null;
}

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});