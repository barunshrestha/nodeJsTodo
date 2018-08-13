var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userCountSchema = new schema ({
    username: String,
    FirstName: String,
    MiddleName: String,
    LastName: String,
    Country: String,
    Position: Number,
    DateRegistered: Date,
    BlockStackAddress: String
})
var Users = mongoose.model('UserCount',userCountSchema);

module.exports = Users;