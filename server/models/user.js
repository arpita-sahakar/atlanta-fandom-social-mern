import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: [true, "please enter valid email id"]
      },
    passWord : {
        type : String,
        min : [4, "length cannot be less then 4"],
        max : [12, "length cannot be more then 12"],
        required : [true, "please enter valid password"]
    },
    firstName : {
        type : String,
        required : [true, "Enter a valid input"]
    },
    lastName : {
        type : String,
        required : [true, "Enter a valid input"]
    }

})