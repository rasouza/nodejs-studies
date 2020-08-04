var mongoose = require('mongoose');

module.exports = function(app) {
  app.all('/home', function(req,res) {
    res.render('home', {
      username: req.session.username
    })
  })
}
