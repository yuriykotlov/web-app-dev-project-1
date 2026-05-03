'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const userStore = {
  store: new JsonStore('./models/user-store.json', { users: [] }),
  collection: 'users',
  
  getUserById(id) {
    return this.store.findOneBy(this.collection, (user => user.id === id));
  },
  
  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, (user => user.email === email));
  },
  
  async addUser(user, file, response) {
    try {
      user.picture = await this.store.addToCloudinary(file);
      this.store.addCollection(this.collection, user);
      response();
    } catch (error) {
      logger.error("Error processing user signing up:", error);
      response(error);
    }
  },
  
  getAllUsers() {
    return this.store.findAll(this.collection);
  }
};

export default userStore;
