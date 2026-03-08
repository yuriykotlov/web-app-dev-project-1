'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";

const course = {
  createView(request, response) {
    const courseId = request.params.id;
    
    const viewData = {
      title: "Restaurant de Ford | Course",
      thisCourse: mainMenu.getCourse(courseId)
    };
    
    response.render('course', viewData);   
  },
};

export default course;