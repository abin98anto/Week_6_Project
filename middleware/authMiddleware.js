// authMiddleware.js
const isLoggedIn = (req, res, next) => {
    console.log(req.session.user_id);
  if (req.session && req.session.user_id) {
    return next();
  }
  res.redirect("/login");
};



module.exports = {
  isLoggedIn,
};
