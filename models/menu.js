'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const menu = {
  mainMenu: new JsonStore('./models/menu.json', { menu: [] }),
  collection: 'menu',

  getAppInfo() {
    return this.mainMenu.findAll(this.collection);
  },
};

export default menu;