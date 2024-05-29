const User = require('../models/user.model') 
const bcryptjs = require('bcryptjs')
const { errorHandler } = require('../utils/error.js');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    // const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password });
    try {
      await newUser.save();
      res.status(201).json('User created successfully!');
    } catch (error) {
      next(error);
    }
  };

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("this is login pass", email, password);
  
  try {
    const validUser = await User.findOne({ email });
    console.log("valid", validUser);
    
    if (!validUser) {
      return next(errorHandler(404, 'User not found!'));
    }
  
    if (password === validUser.password) {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc
      console.log("done", rest)
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      return next(errorHandler(401, 'Invalid password!'));
    }
  } catch (error) {
    next(error);
  }
  
  };