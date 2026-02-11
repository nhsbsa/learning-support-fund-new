// ********************************
// LSF PUBLIC (v10/sign-in)
// ********************************

// External dependencies
const e = require('express');
const express = require('express');
const session = require('express-session');
// const moment = require('moment');
const router = express.Router();



router.post('/lsf-public/v10/sign-in/course-study', (req, res) => {

  const course = req.body.course;

  // your course logic here
  res.redirect('/lsf-public/v10/sign-in/new-employment');

});

router.post('/new-employment', (req, res) => {

  const employNew = req.session.data['OptionEmployment']

  if (employNew== 'yes') {
   res.redirect('/lsf-public/v10/sign-in/course-length');
  } else {
    res.redirect('/lsf-public/v10/sign-in/new-employment-kickout');
  }

})

module.exports = router;
