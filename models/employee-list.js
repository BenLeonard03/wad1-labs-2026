'use strict';

import JsonStore from "./json-store.js";

const employeeList = {
  // employees should default to an ARRAY, not an object
  store: new JsonStore("./models/employee-list.json", { employees: [] }),
  collection: "employees",

  getEmpInfo() {
    return this.store.findAll(this.collection);
  }
};

export default employeeList;