var mongoose = require('mongoose');

module.exports = {
  get_index: function(req,res) {
    mongoose.model('User').find({}, function(err, data) {
      res.format({
        html: function() {
          res.render('index', {
            title: 'Agenda',
            users: data
          })
        },
        json: function() { res.json(data) }
      })
    });

  }
}
