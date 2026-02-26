'use strict';

import logger from "../utils/logger.js";
import employeeList from "../models/employee-list.js";   // <-- import your model

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About",
      employee: employeeList.getEmpInfo()
    };
    logger.info(viewData.employee)
    response.render("about", viewData);
  },
};

export default about;
 