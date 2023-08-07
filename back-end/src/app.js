import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db/setup.js';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(cors());

app.use(bodyParser.json());

const port = 3030;

app.post('/sinistro',
body('date')
  .notEmpty()
  .isDate(),
body('type')
  .notEmpty(),
body('location')
  .notEmpty(),
async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    return res.send({ errors: result.array() });
  }
  const claim = req.body;
  claim.id = Math.floor(Date.now() / 1000);
  db.data.claims.push(claim);
  await db.write();
  res.send(claim);
});

app.put('/sinistro/:id', async (req, res) => {
  await db.read();
  const claimId = req.params.id;
  const selectedClaimIndex = db.data.claims.findIndex((el) => (el.id == claimId));
  if (selectedClaimIndex === -1) {
    return res.sendStatus(404);
  }
  const { body } = req;
  delete body.id;
  db.data.claims[selectedClaimIndex] = { ...db.data.claims[selectedClaimIndex], ...body };
  await db.write();
  res.sendStatus(200);
});

app.delete('/sinistro/:id', async (req, res) => {
  await db.read();
  const claimId = req.params.id; 
  const { claims } = db.data;
  const selectedToDeleteIndex = claims.findIndex((el) => (el.id == claimId));
  if (selectedToDeleteIndex === -1) {
    return res.sendStatus(404);
  }
  console.log(claims[selectedToDeleteIndex]);
  claims.splice(selectedToDeleteIndex, 1);
  await db.write();
  res.sendStatus(200);
});

app.get('/sinistro', async (req, res) => {
  await db.read();
  const { claims } = db.data;
  res.send(claims);
});

app.listen(port, async () => {
  await db.read();
  console.log(`App listening on port ${port}`);
});
