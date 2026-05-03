'use strict';

import logger from "../utils/logger.js";
import accounts from './accounts.js';

const bookingComplete = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if(loggedInUser){
      logger.info("Thanks page loading!");
      
      // no info needed for thanks page, only its title and to render it
      const viewData = {
        title: "Restaurant de Ford | Booking complete",
        formattedName: loggedInUser.restaurantName + " @ " + loggedInUser.location,
        //picture: loggedInUser.picture
      };
      
      response.render('thanks', viewData);
    } else response.redirect('/');
  },
};

export default bookingComplete;
