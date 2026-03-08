'use strict';

import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";

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
};

export default menu;