'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const menu = {
  mainMenu: new JsonStore('./models/menu.json', { menu: [] }),
  collection: 'menu',
  array: 'meals',

  getAppInfo() {
    return this.mainMenu.findAll(this.collection);
  },

  getCourse(id) {
    return this.mainMenu.findOneBy(this.collection, (course => course.id === id));
  },

  addCourse(course) {
    this.mainMenu.addCollection(this.collection, course);
  },

  addMeal(id, meal) {
    this.mainMenu.addItem(this.collection, id, this.array, meal);
  }
};

export default menu;