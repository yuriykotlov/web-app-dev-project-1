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

  addMeal(request, response){
    const courseId = request.params.id;
    const newMeal = {
      id: uuidv4(),
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      rating: request.body.rating,
    };
    mainMenu.addMeal(courseId, newMeal);
    response.redirect('/course/' + courseId);
  }
};

export default menu;