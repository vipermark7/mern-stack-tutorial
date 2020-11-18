const express = require('express');
const employeeRouter = express.Router();
const Employee = require('../models/Employee');

// read employee from database
employeeRouter.get('/', (req, res) => {
    Employee.find({}, (err, response) => {
        if (err) {
            res.status(500).json({
                message: {
                    body: "Unable to get employee",
                    error: true
                }
            });
        } else {
            res.status(200).json(response);
        }
    });
});

// add new employee to database
employeeRouter.post('/', (req, res) => {
    const employee = new Employee(req.body);
    employee.save((err, document) => {
        if (err) {
            res.status(500).json({
                message: {
                    body: "Unable to add employee to database",
                    error: true
                }
            });
        } else {
            res.status(200).json({
                message: "Employee added to database successfully!",
                error: false
            });
        }
    });
});

employeeRouter.delete('/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.status(500).json({
                message: {
                    body: "Unable to delete employee from database",
                    error: true
                }
            });
        } else
            res.status(200).json({
                message: "Employee deleted successfully!",
                error: false
            });
    })
});

// edit existing employee
employeeRouter.put(':id', (req, res) => {
    Employee.findOneAndUpdate(req.params.id.req.body, { runValidators: true }, (err) => {
        if (err) {
            res.status(500).json({
                message: {
                    body: "Unable to delete employee",
                    error: true
                }
            });
        } else {
            res.status(200).json({
                message: "Successfully deleted employee!",
                error: false
            });
        }
    });
});

module.exports = employeeRouter;