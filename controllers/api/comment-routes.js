const router = require('express').Router();
const { Comment, User } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email', 'password'],
            },
        ],
    })
    .then(dbCommentData => {
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

router.delete('/:id', (req, res) => {

});

module.exports = router;