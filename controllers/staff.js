'use strict';

import logger from "../utils/logger.js";
import staff from "../models/staff.js";

const info = {
  createView(request, response) {
    logger.info("Staff page loading!");
    
    // get staff and their names, pictures, and other info
    const viewData = {
      title: "Restaurant de Ford | About us",
      staffMembers: staff.getAppInfo()
    };
    
    response.render('staff', viewData);   
  },
};

export default info;