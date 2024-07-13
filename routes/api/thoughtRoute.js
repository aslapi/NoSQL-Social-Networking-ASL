const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts - GET all thoughts and POST a new thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId - GET a single thought, PUT or update a thought, and DELETE a thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;