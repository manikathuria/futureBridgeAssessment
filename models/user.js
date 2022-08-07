const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let validateEmail = (email) =>{
    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailRegex.test(email);
};

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate:[validateEmail,'Please fill a valid Email address'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid Email address']
    },
    contactNumber:{
        type:Number
    }
});



module.exports = mongoose.model("user", userSchema);