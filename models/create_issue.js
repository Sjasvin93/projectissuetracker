//including the mongoose library
const mongoose = require('mongoose');

//creating the create bug/issue database schema
const createIssueSchema = new mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    label :{
        type: String,
        required: true
    },
    author :{
        type: String,
        required: true
    },
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project',
        required : true
    }
});

//naming the collection
const issueSchema = mongoose.model('issueSchema',createIssueSchema);

//exporting the createIssue collection
module.exports = issueSchema;