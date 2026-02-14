'use strict';

import logger from "../utils/logger.js";
import employeeList from "../models/employee-list.js";   // <-- import your model

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const employeeInfo = employeeList.getAppInfo();

    const viewData = {
      title: "About",
      employee: employeeInfo
    };

    response.render("about", viewData);
  },
};

export default about;
