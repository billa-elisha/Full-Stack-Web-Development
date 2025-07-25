// sign up a user
import User from "../models/user.schema.js";
import asynHandler from "../service/asyncHandler";
import CustomError from "../utils/CustomError";

export const cookieOption = {
  expires: new Date.now() + 3 * 24 * 60 * 60 * 100, //3days
  httpOnly: true,
};

/********************************************
 * @SIGNUP
 * @route http://localhost:5000/api/auth/signUp
 * @description user signup controller for creating new User
 * @Returns user Object
 * **********************************************/

const signUp = asynHandler(async (req, res) => {
  // get data from user
  const { name, email, password } = req.body;

  // validation of the data
  if (!name || !email || password) {
    throw CustomError("Please add all fields", 400);
  }

  //   if all the validation are correct the we have to create a new user in our db
  const existingUser = await User.findOne({ email: email }); // checking if user exist
  if (existingUser) {
    throw CustomError("User already exist", 400);
  }

  // creating user
  const user = await User.create({ name, email, password });

  //getting token
  const token = user.getJWTtoken();
  // for safty purpose the first time your create a data if the field select = false
  // you can still select it. it is only the second time that it is applied to prevent that we set this
  user.password = undefined;

  //stor token in user cookie
  user.cookie("token", token, cookieOption);

  //sending response
  res.status(200).json({
    success: true,
    token,
    user,
  });
});

export const login = asynHandler(async (req, res) => {
  const { email, password } = req.body;

  //  validation
  if (!email || !password) {
    throw new CustomError("Please fill all fields", 400);
  }

  // fetching user
  const user = User.findOne({ email: email }).select("+password"); //the .select comes to help me select fields that their select is false in the model.

  if (!user) {
    throw new CustomError("Invalid credentials", 400);
  }

  // matching the password
  const isPasswordMatched = user.comparePassword(password);

  if (isPasswordMatched) {
    const token = user.getJWTtoken();
    user.password = undefined;
    res.cookie("token", token, cookieOption);
    return res.status(200).json({
      success: true,
      token,
      user,
    });
  }

  throw new CustomError("password is incorrect", 400);
});

export const logout = asynHandler(async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logged out",
  });
});
