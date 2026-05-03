'use strict';

import logger from "../utils/logger.js";
import galleryPictures from "../models/gallery.js";
import accounts from './accounts.js';

const gallery = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if(loggedInUser){
      logger.info("Gallery page loading!");
      
      // get all gallery pictures
      const viewData = {
        title: "Restaurant de Ford | Gallery",
        info: galleryPictures.getAppInfo(),
        formattedName: loggedInUser.restaurantName + " @ " + loggedInUser.location,
        //picture: loggedInUser.picture
      };
      
      response.render('gallery', viewData);
    } else response.redirect('/');
  },
};

export default gallery;
