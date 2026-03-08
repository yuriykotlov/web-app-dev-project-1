'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const gallery = {
  restaurantGallery: new JsonStore('./models/gallery.json', { gallery: [] }),
  collection: 'gallery',

  getAppInfo() {
    return this.restaurantGallery.findAll(this.collection);
  },
};

export default gallery;