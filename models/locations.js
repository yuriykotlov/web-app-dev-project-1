'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const locations = {
  stores: new JsonStore('./models/locations.json', { locations: [] }),
  collection: 'locations',

  getAppInfo() {
    return this.stores.findAll(this.collection);
  },
};

export default locations;