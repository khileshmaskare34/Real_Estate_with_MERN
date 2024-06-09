const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser =  require('cookie-parser');

const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')
const listingRouter = require('./routes/listing.route')
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const mongoURI = process.env.MONGO_URI.replace(/\/\w+$/, '/realstate');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})


app.use('/server/auth', authRouter)
app.use('/server/user', userRouter)
app.use('/server/listing', listingRouter)
 
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