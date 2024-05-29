const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./routes/auth.route')
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})


app.use('/server/auth', userRouter)
 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });