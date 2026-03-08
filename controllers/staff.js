'use strict';

import logger from "../utils/logger.js";
import staff from "../models/staff.js";

const info = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "Restaurant de Ford | Staff",
      staffMembers: staff.getAppInfo()
    };
    
    response.render('staff', viewData);   
  },
};

export default info;