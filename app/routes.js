// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// V10 Public
router.get('/lsf-public/v10/:page', (req, res) => {
    const number = 'v10';
    const templatePath = `lsf-public/v10/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});



// ================================
// Routes for LSF Portal
// ================================



// ================================
// Routes for LSF Public
// ================================
router.use('/lsf-public/v10', require('./views/lsf-public/v10/_routes'));



// ================================
// Routes for LSF Web
// ================================



module.exports = router;
