'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// add your own routes below

import start from './controllers/start.js';
import menu from "./controllers/menu.js";
import course from "./controllers/course.js";
import staff from "./controllers/staff.js";
import gallery from "./controllers/gallery.js";
import thanks from "./controllers/thanks.js";
import statistics from "./controllers/statistics.js";
import accounts from './controllers/accounts.js';

router.get('/start', start.createView);
router.get('/menu', menu.createView);
router.get('/course/:id', course.createView);
router.get('/staff', staff.createView);
router.get('/gallery', gallery.createView);
router.get('/thanks', thanks.createView);
router.get('/statistics', statistics.createView);

router.post('/menu/addcourse', menu.addCourse);
router.get('/menu/deletecourse/:id', menu.deleteCourse);
router.post('/menu/updatecourse/:id', menu.updateCourse);
router.post('/course/:id/addmeal', course.addMeal);
router.get('/course/:id/deletemeal/:mealid', course.deleteMeal);
router.post('/course/:id/updatemeal/:mealid', course.updateMeal);

router.get('/searchCategory', menu.createView);
router.get('/sortData', menu.createView);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

export default router;
