const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users - GET all users and POST a new user
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId - GET a single user, PUT or update a user, and DELETE a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId - POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId/friends/:friendId - DELETE to remove a friend from a user's friend list
router.route('/userId/friends/:friendId').delete(removeFriend);

module.exports = router;