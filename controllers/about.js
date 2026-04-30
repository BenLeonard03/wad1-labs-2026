'use strict';

import logger from "../utils/logger.js";
import employeeList from "../models/employee-list.js";   // your model
import accounts from './accounts.js';

const about = {
  
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");
    
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        employees: empStore.getEmployees(),
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
},

};

export default about;