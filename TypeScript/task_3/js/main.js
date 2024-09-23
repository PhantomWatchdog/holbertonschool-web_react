"use strict";
/// <reference path ='./crud.d.ts' />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: 'Guilaume',
    lastName: 'Salva',
};
var newRowID = CRUD.insertRow(row);
var updatedRow = {
    firstName: 'Guilaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
