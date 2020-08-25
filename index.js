const express = require('express')
const app = express()
const path = require('path')
const port = 5000
const fs = require('fs')

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("frontend/build"))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend/build/index.html"))
        let files = fs.readdirSync(path.join(__dirname, "frontend"))
        console.log("my files are " + files)
    })
    
}


app.listen(process.env.PORT || port)