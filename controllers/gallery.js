'use strict';

import logger from "../utils/logger.js";
import gallery from "../models/gallery.js";

const restaurantGallery = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "Restaurant de Ford | Gallery",
      info: gallery.getAppInfo()
    };
    
    response.render('gallery', viewData);   
  },
};

export default restaurantGallery;
