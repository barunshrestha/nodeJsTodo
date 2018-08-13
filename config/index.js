var configValues = require('./config');


module.exports = {
    getDBConnectionString: function(){
            return 'mongodb://' + configValues.uname + ':' + configValues.pwd  + '@ds217452.mlab.com:17452/todobarun';
    }
}