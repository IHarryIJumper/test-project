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
		if (department.id !== undefined && department.firstName !== undefined && department.lastName !== undefined && department.departmentId !== undefined) {
			if (typeof department.id === 'number') {
				this.id = department.id;
			} else if (typeof parseInt(department.id) === 'number') {
				this.id = parseInt(department.id);
			} else {
				modelError(3);
			}

			if (typeof department.name === 'string') {
				this.name = department.name;
			} else {
				this.name = department.name.toString();
			}	
		} else {
			modelError(1);
		}
	}

	setDepartmentWithId(department, id) {
		if (id !== undefined && department.firstName !== undefined && department.lastName !== undefined && department.departmentId !== undefined) {
			if (typeof id === 'number') {
				this.id = id;
			} else if (typeof parseInt(id) === 'number') {
				this.id = parseInt(id);
			} else {
				modelError(3);
			}

			if (typeof department.name === 'string') {
				this.name = department.name;
			} else {
				this.name = department.name.toString();
			}
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

	getAll() {
		return this.departments;
	}

	getOneById(id) {
		let _found = false,
			returnElement = null;

		this.departments.every((department, departmentIndex) => {
			if (department.id === id) {
				_found = true;
				returnElement = this.departments[departmentIndex];
			}

			return !_found;
		});

		return returnElement;
	}

	getOneByIndex(index) {
		return this.departments[index];
	}

}

const modelError = (errorCode) => {
	console.trace();
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