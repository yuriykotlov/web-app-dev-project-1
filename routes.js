'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// add your own routes below

import start from './controllers/start.js';
import menu from "./controllers/menu.js";
import staff from "./controllers/staff.js";
import locations from "./controllers/locations.js";

router.get('/', start.createView);
router.get('/menu', menu.createView);
router.get('/staff', staff.createView);
router.get('/locations', locations.createView);

export default router;
