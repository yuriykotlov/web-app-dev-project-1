'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";
import { v4 as uuidv4 } from 'uuid';

const menu = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    // get all main menu info
    const viewData = {
      title: "Restaurant de Ford | Menu",
      course: mainMenu.getAppInfo()
    };

    response.render('menu', viewData);   
  },

  addCourse(request, response){
    const courseId = request.params.id;
    const newCourse = {
      id: uuidv4(),
      name: request.body.name,
      meals: []
    };
    mainMenu.addCourse(newCourse);
    
    response.redirect('/menu');
  },

  deleteCourse(request, response){
    const courseId = request.params.id;
    logger.debug(`Deleting Course ${courseId}`);
    mainMenu.deleteCourse(courseId)
    
    response.redirect('/menu');
  }
};

export default menu;