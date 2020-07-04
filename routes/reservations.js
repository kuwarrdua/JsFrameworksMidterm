const { index, show, new: _new, edit, create, update, delete: _delete } = require('../controllers/ReservationsController');

function auth (req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('danger', 'You need to login first.');
    return res.redirect('/login');
  }
  next();
}

module.exports = router => {
  // put your routes here
  router.get('/reservations', index); //pulic
  router.get('/reservations/new', auth, _new); // authenticated
  router.post('/reservations', auth, create);// authenticated
  router.post('/reservations/update', auth, update);// authenticated
  router.post('/reservations/delete', auth,  _delete);// authenticated
  router.get('/reservations/:id/edit', auth, edit);// authenticated
  router.get('/reservations/:id', show); // authenticated
};