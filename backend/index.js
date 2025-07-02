 // we will be getting our transcripts from the youtube api and sending it over to OpenAi here

 const express = require('express') // express for the first time to make http requests more convenient
 const cors = require('cors') // this will let our backend and front end talk : bypass CORS policy
 const app = express() // creating the server here is so much simpler than without Express
 const PORT = 5000

 
app.use(cors()) // pass CORS policy
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

app.post("/api/transcript", (req,res) => { // we dont have to check for the type of request if we use express
    // learn how to handle the request using express
    console.log(req.body)
});

app.listen(PORT, () => {
    console.log(`Example app listening at http:localhost:${PORT}`)
}); 