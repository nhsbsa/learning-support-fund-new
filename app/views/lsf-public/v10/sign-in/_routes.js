// ********************************
// LSF PUBLIC (v10/sign-in)
// ********************************

// External dependencies
const e = require('express');
const express = require('express');
const session = require('express-session');
// const moment = require('moment');
const router = express.Router();




router.post('/new-employment', (req, res) => {

  const employNew = req.session.data['OptionEmployment']

  if (employNew== 'yes') {
   res.redirect('/course-length');
  } else {
    res.redirect('/new-employment-kickout');
  }

})

module.exports = router;
