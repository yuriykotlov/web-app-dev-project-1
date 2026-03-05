'use strict';

import logger from "../utils/logger.js";
import locations from "../models/locations.js";

const menu = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "Restaurant de Ford | Locations",
      info: locations.getAppInfo()
    };
    
    response.render('locations', viewData);   
  },
};

export default menu;