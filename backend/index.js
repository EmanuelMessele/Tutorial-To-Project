

const express = require('express') // express for the first time to make http requests more convenient
const cors = require('cors') // this will let our backend and front end talk : bypass CORS policy
const app = express() // creating the server here is so much simpler than without Express const PORT = 5000
const { execFile } = require('child_process') // will help us run the script file
const { stderr } = require('process')
const PORT = 5000
 
app.use(cors()) // pass CORS policy
app.use(express.json()); // registering middleware
// before any of the routes are run, we will parse whatever incoming JSON

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
    
    console.log(videoID) 
    
    // attempt to use python api instead, we must first connect to python
     execFile('python', ['api_operator.py', videoID], (error, stdout, stderr) => {
        if(error){
            console.error("Python Error", error); 
            return; 
        }

        console.log("Transcript Output", stdout)
     });

});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});