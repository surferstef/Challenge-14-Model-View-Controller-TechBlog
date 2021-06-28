const router = require('express').Router();
const userRoutes = require('./api.js');


router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;