var mongoose = require('mongoose')

module.exports = function(app) {
  app.get('/users', function(req, res) {
    mongoose.model('User').find({}, function(err, data) {
      res.format({
        html: function() {
          res.render('users', {
            title: req.session.username,
            users: data
          })
        },
        json: function() { res.json(data) }
      })
    });
  });
}
