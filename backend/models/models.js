var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userInfo: {
        type: Object
    },
    suspended: Object,
    warnings: Object
});

var postSchema = mongoose.Schema({
    user: Object,
    date: Number,
    flagged: Boolean,
    content: String,
    replies: []
});

var countSchema = mongoose.Schema({
    count: Object
});


var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);
var Count = mongoose.model('Count', countSchema);

module.exports = {
    User: User,
    Post: Post,
    Count: Count
};
