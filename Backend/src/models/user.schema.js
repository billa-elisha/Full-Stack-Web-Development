import mangoose from "mangoose";
import authRoles from "../utils/authRoles";
import bcrypt from "bcrypt";

const userSchema = mangoose.Schema(
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
});

export default mangoose.model("User", userSchema);
