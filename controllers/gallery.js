'use strict';

import logger from "../utils/logger.js";
import galleryPictures from "../models/gallery.js";

const gallery = {
  createView(request, response) {
    logger.info("Gallery page loading!");
    
    // get all gallery pictures
    const viewData = {
      title: "Restaurant de Ford | Gallery",
      info: galleryPictures.getAppInfo()
    };
    
    response.render('gallery', viewData);   
  },
};

export default gallery;
