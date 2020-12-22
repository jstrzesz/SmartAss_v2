import Axios from "axios";

const express = require('express');
const bodyParser = require('body-parser');
const port = require('../config');
const routerToken = require('./routes/token');
const cors = require('cors');
const axios = require('axios');
const getQuestions = require('./api/getQuestions');

const app = express();
app.use(cors());

app.use('/', express.static(`__dirname${'/../dist'}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/token', routerToken);

app.post('/gameOptions', async (req: any, res: any) => {
  const { amount } = req.body;
  const questions = await getQuestions(amount);
  res.send(questions);
  res.end();
})

app.listen(port, () => {
  console.log(`Smart Ass live on port: ${port}`)
})