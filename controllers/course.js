'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";
import { parse, v4 as uuidv4 } from 'uuid';

const course = {
  createView(request, response) {
    // course meal id to get
    const courseId = request.params.id;
    
    // get specific course meals from id
    const viewData = {
      title: "Restaurant de Ford | Course",
      thisCourse: mainMenu.getCourse(courseId)
    };
    
    response.render('course', viewData);   
  },

  addMeal(request, response){
    const courseId = request.params.id;
    
    const newMeal = {
      id: uuidv4(),
      name: request.body.name,
      description: request.body.description,
      price: parseFloat(request.body.price),
      rating: parseInt(request.body.rating),
    };
    mainMenu.addMeal(courseId, newMeal);
    
    response.redirect('/course/' + courseId);
  }
};

export default course;