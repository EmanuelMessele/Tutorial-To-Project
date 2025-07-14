 // we will be getting our transcripts from the youtube api and sending it over to OpenAi here

 const express = require('express') // express for the first time to make http requests more convenient
 const cors = require('cors') // this will let our backend and front end talk : bypass CORS policy
 const app = express() // creating the server here is so much simpler than without Express
 const { YoutubeTranscript } =  require('youtube-transcript')// here we will just get the one method we need from this object
 const PORT = 5000

 
app.use(cors()) // pass CORS policy
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

app.post("/api/transcript", async (req,res) => { // we dont have to check for the type of request if we use express
    // learn how to handle the request using express
    console.log("We made it into the POST")
    console.log("req.body", req.body) // comma vs the plus sign 

    console.log('Youtube API Object:', YoutubeTranscript)
    console.log('Youtube API fetchTranscript method:', YoutubeTranscript.fetchTranscript)
    console.log('Youtube API All Methods:', Object.getOwnPropertyNames(YoutubeTranscript))

    // youtube api send 
    const { link } = req.body // another example of destructuring, instead it would be link = req.body.link
    const videoID = YoutubeTranscript.retrieveVideoId(link)
    // test the function console.log(getVidID("https://www.youtube.com/watch?v=abc123DEFgh")); // "abc123DEFgh"
   console.log(videoID)

   if(!videoID){
      return res.status(400).json({error: "Invalid Youtube Link"}) // remember the front end sent a fetch request to the backened so we do have to return something
   }

   try{
     const transcript = await YoutubeTranscript.fetchTranscript(videoID)
     console.log("transcript logged: ", transcript.length)
     res.json({ transcript })
     
     
   } catch(err){
      console.log("Error with getting transcript", err)
   }   // comeback we need to test this in the react

});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});