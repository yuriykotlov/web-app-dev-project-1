'use strict';

import logger from "../utils/logger.js";
import accounts from './accounts.js';

const start = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if(loggedInUser){
      logger.info("Start page loading!");

      // info is not needed for start, just the title and to render its page
      const viewData = {
        title: "Restaurant de Ford",
        formattedName: loggedInUser.restaurantName + " @ " + loggedInUser.location,
        //picture: loggedInUser.picture
      };
      
      response.render('start', viewData);
    } else response.redirect('/');
  },
};

export default start;
