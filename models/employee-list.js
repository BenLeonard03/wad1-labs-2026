'use strict';

import JsonStore from "./json-store.js";

const employeeList = {
  store: new JsonStore("./models/employee-list.json", { employee: {} }),
  collection: "employee",

  getAppInfo() {
    return this.store.findAll(this.collection);
  }
};

export default employeeList;

