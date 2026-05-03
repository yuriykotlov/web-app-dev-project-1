'use strict';

import logger from "../utils/logger.js";
import staff from "../models/staff.js";
import accounts from './accounts.js';

const info = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if(loggedInUser){
      logger.info("Staff page loading!");
      
      // get staff and their names, pictures, and other info
      const viewData = {
        title: "Restaurant de Ford | About us",
        staffMembers: staff.getAppInfo(),
        formattedName: loggedInUser.restaurantName + " @ " + loggedInUser.location,
        //picture: loggedInUser.picture
      };
      
      response.render('staff', viewData);
    } else response.redirect('/');
  },
};

export default info;