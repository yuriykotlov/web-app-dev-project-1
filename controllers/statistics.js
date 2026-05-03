"use strict";
import logger from "../utils/logger.js";
import mainMenu from "../models/menu.js";
import accounts from './accounts.js';

const stats = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    
    if(loggedInUser){
      logger.info("Statistics page loading!");
      // app statistics calculations
      const courses = mainMenu.getUserCourses(loggedInUser.id);

      let numberOfCourses = courses.length;
      let numberOfMeals = courses.reduce((total, course) => total + course.meals.length, 0);

      let averageMealsPerCourse = numberOfCourses > 0 ? (numberOfMeals / numberOfCourses).toFixed(2) : 0;

      let totalRatingOfMeals = courses.reduce((total, course) => total + course.meals.reduce((total, meal) => total + meal.rating, 0), 0);
      let averageRatingOfMeals = numberOfMeals > 0 ? totalRatingOfMeals / numberOfMeals : 0;

      let largestCourse = Math.max(...courses.map(course => course.meals.length));
      let accountsRegistered = accounts.getUserCount();

      const statistics = {
          displayNumberOfCourses: numberOfCourses,
          displayNumberOfMeals: numberOfMeals,
          displayAverageMealsPerCourse: averageMealsPerCourse,
          displayAverageRatingOfMeals: averageRatingOfMeals.toFixed(2),
          largestCourse: largestCourse,
          userCount: accountsRegistered
      };

      const viewData = {
        title: "Restaurant de Ford | Statistics",
        statistics: statistics,
        formattedName: loggedInUser.restaurantName + " @ " + loggedInUser.location,
        //picture: loggedInUser.picture
      };
    
      response.render("statistics", viewData);
    }
    else response.redirect('/');
  },
};

export default stats;