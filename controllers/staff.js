'use strict';

import logger from "../utils/logger.js";
import staff from "../models/staff.js";

const menu = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "Restaurant de Ford | Staff",
      info: staff.getAppInfo()
    };
    
    response.render('staff', viewData);   
  },
};

export default menu;