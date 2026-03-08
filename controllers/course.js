'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";

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
};

export default course;