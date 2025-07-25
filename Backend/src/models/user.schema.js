import mongoose from "mongoose";
import authRoles from "../utils/authRoles";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import config from "../config/index";
import crypto from "crypto";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please user name is required"],
      trim: true,
      maxLength: [50, "your name must not be more than 50 chars"],
    },
    email: {
      type: String,
      required: [true, "please user email is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please user email is required"],
      trim: true,
      maxLength: [8, "your password must  be aleats 8 chars"],
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(authRoles),
      default: authRoles.USER,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  { timestamps: true }
);

// encripting the password before storing it the the bcrypt module
userSchema.pre("save", async function (next) {
  // Do the next operation (encripting) if this is the first time
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// providing custom methods for our schema to help with the compare,forgot password functionallity
userSchema.methods = {
  // compare password
  comparePassword: async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  },
  // generating JWT token
  getJWTtoken: function () {
    JWT.sign({ _id: this._id, role: this.role }, config.JWT_SECRET, {
      expiresIn: config.JWT_EPIRY,
    });
  },
  // generating forgotPasswordToken
  generateForgotPasswordToke: function () {
    const forgotToken = crypto.randomBytes(20).toString("hex");
    // encrypting the new generated token and update the forgottoke with that value to store in the db
    this.forgotPasswordToken = crypto
      .createHash("sha256")
      .update(forgotToken)
      .digest("hex");

    // time for token to expires
    this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;

    return forgotToken;
  },
};

export default mongoose.model("User", userSchema);
