const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

router.route('/:pizzaID').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId/ :replyId').delete(removeReply);

module.exports = router;
