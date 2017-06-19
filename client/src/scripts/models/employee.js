import Ajv from 'ajv';

import {
	EmployeeSchema
} from '../schemas/schemas.js';

const Validation = new Ajv().compile(EmployeeSchema);

class Employee {
	constructor(employee, id) {
		if (arguments.length === 1) {
			this.setEmployee(employee);
		} else if (arguments.length === 2) {
			this.setEmployeeWithId(employee, id);
		} else {
			modelError(0);
		}
	}

	setEmployee(employee) {
		const valid = Validation(employee);
		if (valid) {
			this.id = employee.id;
			this.firstName = employee.firstName;
			this.lastName = employee.lastName;
			this.departmentId = employee.departmentId;
		} else {
			modelError(1);
		}
	}

	setEmployeeWithId(employee, id) {
		
		const valid = Validation(Object.assign({}, employee, {
			id
		}));
		if (valid) {
			this.id = employee.id;
			this.firstName = employee.firstName;
			this.lastName = employee.lastName;
			this.departmentId = employee.departmentId;
		} else {
			modelError(2);
		}
	}

	update(employee, id) {
		if (arguments.length === 1) {
			this.setEmployee(employee);
		} else if (arguments.length === 2) {
			this.setEmployeeWithId(employee, id);
		} else {
			modelError(5);
		}
	}

}

import {
	DepartmentSchema
} from '../schemas/schemas.js';
const modelError = (errorCode) => {
	// console.trace();
	switch (errorCode) {
		case 0:
			throw 'Employee model: Wrong model initialization';
		case 1:
			throw 'Employee model: Missing data on setEmployee';
		case 2:
			throw 'Employee model: Missing data on setEmployeeWithId';
		case 3:
			throw 'Employee model: Wrong employee ID type';
		case 4:
			throw 'Employee model: Wrong department ID type';
		case 5:
			throw 'Employee model: Wrong update data';
	}
};

export default Employee;