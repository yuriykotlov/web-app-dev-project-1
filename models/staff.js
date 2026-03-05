'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const staff = {
  members: new JsonStore('./models/staff.json', { staff: [] }),
  collection: 'staff',

  getAppInfo() {
    return this.members.findAll(this.collection);
  },
};

export default staff;