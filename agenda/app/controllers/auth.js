module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.render('auth/login')
    })

    .post(function(req, res) {
      req.session.username = req.body.username;
      res.redirect('home')
    })
}
