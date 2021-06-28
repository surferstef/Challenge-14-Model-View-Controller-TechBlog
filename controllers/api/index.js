const router = require('express').Router();
//const userRoutes = require('./api.js');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Removing this -- this needs to go in the overarching index.js
// router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.status(404).end();
// });

module.exports = router;