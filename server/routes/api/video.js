const express = require('express');
const router = express.Router();

// Load Video model
const Video = require('../../models/Video');

// @route GET api/videos/test
// @description tests videos route
// @access Public
router.get('/test', (req, res) => res.send('video route testing!'));

// @route GET api/videos
// @description Get all videos
// @access Public
router.get('/', (req, res) => {
  Video.find()
    .then((videos) => res.json(videos))
    .catch((err) => res.status(404).json({ novideosfound: 'No Videos found' }));
});

// @route GET api/videos/:id
// @description Get single video by id
// @access Public
router.get('/:id', (req, res) => {
  Video.findById(req.params.id)
    .then((video) => res.json(video))
    .catch((err) => res.status(404).json({ novideofound: 'No Video found' }));
});

// @route GET api/videos
// @description add/save video
// @access Public
router.post('/', (req, res) => {
  Video.create(req.body)
    .then((video) => res.json({ msg: 'Video added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this video' })
    );
});

// @route GET api/videos/:id
// @description Update video
// @access Public
router.put('/:id', (req, res) => {
  Video.findByIdAndUpdate(req.params.id, req.body)
    .then((video) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/videos/:id
// @description Delete video by id
// @access Public
router.delete('/:id', (req, res) => {
  Video.findByIdAndRemove(req.params.id, req.body)
    .then((video) => res.json({ mgs: 'Video entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a video' }));
});

module.exports = router;
