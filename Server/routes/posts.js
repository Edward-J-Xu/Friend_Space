import express from 'express';

const router = express.Router();

// going to localhost:5000/posts
// http://localhost:5000/posts
router.get('/', (req, res) => {
    res.send('This works!');
})

export default router;

