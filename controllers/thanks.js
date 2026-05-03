'use strict';

import logger from "../utils/logger.js";

const bookingComplete = {
  createView(request, response) {
    logger.info("Thanks page loading!");
    
    // no info needed for thanks page, only its title and to render it
    const viewData = {
      title: "Restaurant de Ford | Booking complete"
    };
    
    response.render('thanks', viewData);
  },
};

export default bookingComplete;
