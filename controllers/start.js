'use strict';

import logger from "../utils/logger.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");

    // info is not needed for start, just the title and to render its page
    const viewData = {
      title: "Restaurant de Ford"
    };
    
    response.render('start', viewData);   
  },
};

export default start;
