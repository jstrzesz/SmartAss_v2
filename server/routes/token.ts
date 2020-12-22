const expressRouter = require('express');
const router = expressRouter.Router();
const getToken = require('../api/getSessionToken');

router.get('/', async (req:any, res:any, next:any) => {
  const token = await getToken();
  res.send(token);
});

module.exports = router;