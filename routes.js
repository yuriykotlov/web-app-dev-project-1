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

router.get('/', start.createView);
router.get('/menu', menu.createView);
router.get('/course/:id', course.createView);
router.get('/staff', staff.createView);
router.get('/gallery', gallery.createView);
router.get('/thanks', thanks.createView);

router.post('/menu/addcourse', menu.addCourse);
router.get('/menu/deletecourse/:id', menu.deleteCourse);
router.post('/course/:id/addmeal', course.addMeal);
router.get('/course/:id/deletemeal/:mealid', course.deleteMeal);

export default router;
