var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    author: 'Abdur Rohman',
    github: "https://github.com/abdur-rohman2883"
  });
});

module.exports = router;
