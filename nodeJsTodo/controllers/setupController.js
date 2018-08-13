var Todos = require('../models/todoModel');
var UserCounts = require('../models/userCountModel');

module.exports = function(app) {
    
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       var starterTodos = [
           {
               username: 'test',
               todo: 'Buy milk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'Feed dog',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'Learn Node',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       }); 
   });

   app.get('/api/setupUserCount', function(req, res) {
        //seed  database
        var userCountFeed = [
            {
                username: 'barunshrestha',
                FirstName: 'Barun',
                MiddleName: 'K',
                LastName: 'Shrestha',
                Country: 'Nepal',
                Position: 1,
                DateRegistered: Date.now(),
                BlockStackAddress: 'UNKNOWN'
            }
        ];
        UserCounts.create(userCountFeed,function(err, results){
            if(err) throw err;
            res.send(results);
        });
   });
    
}