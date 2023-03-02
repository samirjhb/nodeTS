import express from "express";
import userRoute from "./users";


const app = express()
app.use(express.json())
app.use('/', userRoute)




app.listen(3003, () => console.log('Listen to the Port 3003')
)