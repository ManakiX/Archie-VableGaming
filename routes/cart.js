const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const {control} = require('../controller/index');

const controller = new control();

router.get('/cart', controller.fetchCart);

router.get('/cart/:id', controller.fetchCart);

router.patch('/cart/:id', bodyParser.json(), controller.updateCart);

router.delete('/cart/:id', controller.deleteCart);