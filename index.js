console.log("hello world!")
import express from 'express'
import cors from'cors';
import router from './router.js'
import bodyParser from 'body-parser';

const app = express()

app.use(router)
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 
app.listen(3000, () => { 
    console.log("Server is running on port 3000");
});


app.use(cors())

