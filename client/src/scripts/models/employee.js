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
		/*if (employee.id !== undefined && employee.firstName !== undefined && employee.lastName !== undefined && employee.departmentId !== undefined) {
			if (typeof employee.id === 'number') {
				this.id = employee.id;
			} else if (typeof parseInt(employee.id) === 'number') {
				this.id = parseInt(employee.id);
			} else {
				modelError(3);
			}

			if (typeof employee.firstName === 'string') {
				this.firstName = employee.firstName;
			} else {
				this.firstName = employee.firstName.toString();
			}

			if (typeof employee.lastName === 'string') {
				this.lastName = employee.lastName;
			} else {
				this.lastName = employee.lastName.toString();
			}

			if (typeof employee.departmentId === 'number') {
				this.departmentId = employee.departmentId;
			} else if (typeof parseInt(employee.departmentId) === 'number') {
				this.departmentId = parseInt(employee.departmentId);
			} else {
				modelError(4);
			}*/

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
		/*if (id !== undefined && employee.firstName !== undefined && employee.lastName !== undefined && employee.departmentId !== undefined) {
			if (typeof id === 'number') {
				this.id = id;
			} else if (typeof parseInt(id) === 'number') {
				this.id = parseInt(id);
			} else {
				modelError(3);
			}

			if (typeof employee.firstName === 'string') {
				this.firstName = employee.firstName;
			} else {
				this.firstName = employee.firstName.toString();
			}

			if (typeof employee.lastName === 'string') {
				this.lastName = employee.lastName;
			} else {
				this.lastName = employee.lastName.toString();
			}

			if (typeof employee.departmentId === 'number') {
				this.departmentId = employee.departmentId;
			} else if (typeof parseInt(employee.departmentId) === 'number') {
				this.departmentId = parseInt(employee.departmentId);
			} else {
				modelError(4);
			};*/
			debugger;
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

	getAll() {
		return this.employees;
	}

	getOneById(id) {
		let _found = false,
			returnElement = null;

		this.employees.every((employee, employeeIndex) => {
			if (employee.id === id) {
				_found = true;
				returnElement = this.employees[employeeIndex];
			}

			return !_found;
		});

		return returnElement;
	}

	getOneByIndex(index) {
		return this.employees[index];
	}

}

import {
	DepartmentSchema
} from '../schemas/schemas.js';
const modelError = (errorCode) => {
	console.trace();
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