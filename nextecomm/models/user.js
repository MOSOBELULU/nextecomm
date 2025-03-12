import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 1,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      lowercase: true,
      unique: true,
      trim: true,
      minLength: 5,
      maxLength: 50, 
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6, 
    },
    role: {
      type: String,
      default: "user",
    },
    image: String,
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), //10 miutes
      },
    },
  },
  { timestamps: true }
);
 
userSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model("User", userSchema);

// Only apply the unique validator if using Mongoose <7
// if (mongoose.version.startsWith("6")) {
//   userSchema.plugin(uniqueValidator);
// }