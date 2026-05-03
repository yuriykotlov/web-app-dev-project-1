'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";
import { v4 as uuidv4 } from 'uuid';

const menu = {
  createView(request, response) {
    logger.info("Menu page loading!");

    const searchTerm = request.query.searchTerm || "";

    const courses = searchTerm ? mainMenu.searchForCourse(searchTerm) : mainMenu.getAppInfo();

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