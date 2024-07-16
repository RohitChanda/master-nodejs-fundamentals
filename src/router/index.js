const express = require('express');
const router = express.Router();
const users = require("../../MOCK_DATA.json")

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog);

// define the home page route
router.get('/', (req, res) => {
  res.send('home page');
})
// define the about route
router.get('/users', (req, res) => {
  res.setHeader("language", "javascript")
  return res.status(200).json({users, msg:"users fetched"});res
});

router.get('/users/:userId', (req, res) => {
  let user = users.find((item) => item.id == req.params.userId);
  return res.status(200).json({user, msg:"users fetched" });
});
router.post('/add-user', (req, res) => {
  const body = req.body;
  console.log('body',body)
  return res.status(200).json({body, msg:"user added"});
});

module.exports = router;