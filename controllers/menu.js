'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';

const menu = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if(loggedInUser){
      logger.info("Menu page loading!");

      const searchTerm = request.query.searchTerm || "";

      const courses = searchTerm ? mainMenu.searchForCourse(searchTerm) : mainMenu.getUserCourses(loggedInUser.id);

      const sortField = request.query.sort;
      const order = request.query.order === "desc" ? -1 : 1;

      let sorted = courses;

      if (sortField){
        sorted = courses.slice().sort((a, b) => {
          if (sortField === "name") {
            return a.name.localeCompare(b.title) * order;
          }
          if (sortField === "name") {
              return (a.meals.length - b.meals.length) * order;
          }
          return 0;
        });
      }
      
      // get all main menu info
      const viewData = {
        title: "Restaurant de Ford | Menu",
        course: sortField ? sorted : courses,
        search: searchTerm,
        nameSelected: request.query.sort === "name",
        numberOfMeals: request.query.sort === "numberOfMeals",
        ascSelected: request.query.order === "asc",
        descSelected: request.query.order === "desc",
        formattedName: loggedInUser.restaurantName + " @ " + loggedInUser.location,
        picture: loggedInUser.picture
      };

      response.render('menu', viewData);
    } else response.redirect('/');
  },

  addCourse(request, response){
    const loggedInUser = accounts.getCurrentUser(request);
    const courseId = request.params.id;
    
    const newCourse = {
      id: uuidv4(),
      userid: loggedInUser.id,
      name: request.body.name,
      meals: []
    };
    
    mainMenu.addCourse(newCourse, request.files.picture, function(){
      response.redirect('/menu');
    });
  },

  deleteCourse(request, response){
    const courseId = request.params.id;
    logger.debug(`Deleting Course ${courseId}`);

    mainMenu.deleteCourse(courseId, function() {
      response.redirect('/menu');
    });
  },

  updateCourse(request, response){
    const courseId = request.params.id;
    logger.debug(`Updating Course ${courseId}`);
    
    mainMenu.editCourse(courseId, {
      id: courseId,
      name: request.body.name
    });
    
    response.redirect('/menu');
  }
};

export default menu;