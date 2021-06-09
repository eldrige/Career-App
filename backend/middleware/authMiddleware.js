import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
// * it handles exceptions (express async handler)

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // console.log(req.headers.authorization)
  // ! the headers.authorization gives us access to our generated jwt
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // console.log('token found');
    // to get rid of bearer at the start

    try {
      token = req.headers.authorization.split(' ')[1];
      // ! this will decode the given jwt
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      // select defines which ppty to exclude or include
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
  // next();
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
