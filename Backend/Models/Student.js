const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type : String,
        required: [true, 'Name is required']
    },
    age : {
        type: Number,
        required: [true, 'Age is required']
    },
    gender: {
        type:String,
        required: [true, 'Gender is required']
    }
});

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;


