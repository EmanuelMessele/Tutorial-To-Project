 // we will be getting our transcripts from the youtube api and sending it over to OpenAi here

 const express = requires('express') // express for the first time to make http requests more convenient
 const app = express() // creating the server here is so much simpler than without Express
 const PORT = 5000

 
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

app.post("/api/transcript", (req,res) => { // we dont have to check for the type of request if we use express
    // learn how to handle the request using express
});


