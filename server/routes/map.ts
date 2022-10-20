import express from "express";
// import { app } from "../app";
const router = express.Router();

// const fs = require('fs');

router.get('/', (req, res):void => {
  res.status(200).send('pass!');
});

module.exports = router ;

export {router};
