import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, //this is going to create a time field automatically for all ppties
  }
);

// ! mongoose allows us to add methods , which r automatically instantiated to our schemas
userSchema.methods.matchPassword = async function (enteredPassword) {
  //  * compare entered password to actual password
  return await bcrypt.compare(enteredPassword, this.password);
};

// call the method before it created a new instance of the schema
userSchema.pre('save', async function (next) {
  // isModified is a mongoose thing, that checks is smtx has been modified
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  // encrypt the initial password
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
