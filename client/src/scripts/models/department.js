import Ajv from 'ajv';

import {
	DepartmentSchema
} from '../schemas/schemas.js';

const Validation = new Ajv().compile(DepartmentSchema);

class Department {
	constructor(department, id) {
		if (arguments.length === 1) {
			this.setDepartment(department);
		} else if (arguments.length === 2) {
			this.setDepartmentWithId(department, id);
		} else {
			modelError(0);
		}
	}

	setDepartment(department) {
		const valid = Validation(department);
		if (valid) {
			this.id = department.id;
			this.name = department.name;
		} else {
			modelError(1);
		}
	}

	setDepartmentWithId(department, id) {
		const valid = Validation(Object.assign({}, department, {
			id
		}));
		if (valid) {
			this.id = id;
			this.name = department.name;
		} else {
			modelError(2);
		}
	}

	update(department, id) {
		if (arguments.length === 1) {
			this.setDepartment(department);
		} else if (arguments.length === 2) {
			this.setDepartmentWithId(department, id);
		} else {
			modelError(4);
		}
	}

}

const modelError = (errorCode) => {
	// console.trace();
	switch (errorCode) {
		case 0:
			throw 'Department model: Wrong model initialization';
		case 1:
			throw 'Department model: Missing data on setDepartment';
		case 2:
			throw 'Department model: Missing data on setDepartmentWithId';
		case 3:
			throw 'Department model: Wrong department ID type';
		case 4:
			throw 'Department model: Wrong update data';
	}
};

export default Department;