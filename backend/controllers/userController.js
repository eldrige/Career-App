import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    // 401 means unauthorized
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc GET user by ID
// @route GETT /api/users/:id
// @access Private/admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) res.json(user);
  throw new Error('user not found');
});

// @desc Register a new user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  // res.send("Success")
  const { email, name, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    // 400 means bad request
    res.status(400);
    throw new Error('User already exist');
  }
  // create is syntactic sugar, it basiclly acts like a save
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    // 201 means a new resource was created
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // we send back the token as well, so as to authenticate after immediately
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc GET user profile
// @route POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  console.log(req.user);
  if (user) {
    console.log(req.user._id, 'thats all I want');
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      dateOfBirth: user.dateOfBirth,
      levelOfEducation: user.levelOfEducation,
      // token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  console.log(req.body);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address;
    user.dateOfBirth = req.body.dateOfBirth;
    user.levelOfEducation = req.body.levelOfEducation;
    user.sex = req.body.sex;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      address: updatedUser.address,
      dateOfBirth: updatedUser.dateOfBirth,
      levelOfEducation: updatedUser.levelOfEducation,
      sex: updatedUser.sex,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
// @desc DELETE  user
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Get all users
// @route GET /api/users/
// @access private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Update user
// @route PUT /api/users/:od
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Request for a password reset token
// @route POST /api/users/reset-request
// @access Public
const requestPasswordReset = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User does not exist');
  } else {
    let token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    let resetToken = crypto.randomBytes(32).toString('hex');

    await new Token({
      userId: user._id,
      token: resetToken,
      createdAt: Date.now(),
    }).save();

    const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;

    try {
      await sendMail(
        email,
        'Password Reset Request',
        `Please click this link to reset your password:\n ${link}`
      );
      res.send(`${link}`);
    } catch (error) {
      console.log(error.message);
    }
  }
});

// @desc Reset Password
// @route POST /api/users/reset
// @access Public
const resetPassword = asyncHandler(async (req, res) => {
  const { id, token } = req.query;
  const { password } = req.body;
  const user = await User.findById({ _id: id });

  if (!user) {
    res.status(400).send('User does not exist');
  } else {
    let passwordResetToken = await Token.findOne({ userId: id });
    const isValid = token == passwordResetToken.token;
    if (!passwordResetToken || !isValid) {
      throw new Error('Invalid or expired password reset token');
    }

    user.password = password;

    try {
      const updatedUser = await user.save();
      await sendMail(
        user.email,
        'Password Reset Status',
        `Hi, ${user.name} Please login to GarbageBinTracker.com with your new password`
      );
      await passwordResetToken.deleteOne();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
});

export {
  authUser,
  registerUser,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  updateUser,
  getUserById,
  resetPassword,
  requestPasswordReset,
};
