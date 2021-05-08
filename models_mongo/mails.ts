import Mongoose from 'mongoose';

const mailschema: Mongoose.Schema = new Mongoose.Schema({
    to: [{
        type: String,
        ref: 'User',
        required: [true, 'must have atleast one recipent']
    }],
    cc: [{
        type: String,
        ref: 'User'
    }],
    bcc: [{
        type: String,
        ref: 'User'
    }],
    subject:{
        type: String,
        max: [255]
    },
    template: {
        type: String,
        required: [true, 'to send email template need']
    },
    token:{
        type: String
    },
    priority:{
        type: String,
        enum: [0, 1, 2, 3],
        default: 3,
        required: [true, 'should have priority']
    },
    content:{
        type: Object,
        require: [true, 'without data email make no sence']
    },
    isSend:{
        type: Boolean,
        default: false
    }
});

const Email = Mongoose.model('Email', mailschema);

export default Email;