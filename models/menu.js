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

  getUserCourses(userid){
    return this.mainMenu.findBy(this.collection, (course => course.userid === userid));
  },

  addCourse(course){
    this.mainMenu.addCollection(this.collection, course);
  },

  deleteCourse(courseId){
    const course = this.getCourse(courseId);
    this.mainMenu.removeCollection(this.collection, course)
  },

  editCourse(courseId, updatedCourse){
    this.mainMenu.editCollection(this.collection, courseId, updatedCourse);
  },

  searchForCourse(search){
    return this.mainMenu.findBy(
      this.collection,
      (course => course.name.toLowerCase().includes(search.toLowerCase()))
    )
  },

  addMeal(courseId, meal){
    this.mainMenu.addItem(this.collection, courseId, this.array, meal);
  },

  deleteMeal(courseId, mealId){
    this.mainMenu.removeItem(this.collection, courseId, this.array, mealId)
  },

  editMeal(courseId, mealId, updatedMeal){
    this.mainMenu.editItem(this.collection, courseId, mealId, this.array, updatedMeal);
  }
};

export default menu;