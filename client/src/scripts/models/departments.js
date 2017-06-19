import Department from './department.js';

class Departments {
	constructor(departments) {
		if (arguments.length === 0) {
			this.setDefault();
		} else {
			this.setDepartments(departments);
		}
	}

	setDefault() {
		this.departments = [];
	}

	setDepartments(departments) {
		if (Array.isArray(departments)) {
			this.departments = [];
			departments.map((department, departmentIndex) => {
				this.departments.push(new Department(department));
			});
		} else {
			console.error('Departments Model: ', 'Wrong data type');
			this.setDefault();
		}
	}

	add(department) {
		let elementId = 0;

		if (this.departments.length !== 0) {
			elementId = this.departments[this.departments.length - 1].id + 1;
		}

		this.departments.push(new Department(department, elementId));
	}

	delete(id) {
		let _found = false;

		this.departments.every((department, departmentIndex) => {
			if (department.id === id) {
				_found = true;
				this.departments.splice(departmentIndex, 1);
			}

			return !_found;
		});
	}

	deleteSeveral(idArray) {
		if (Array.isArray(idArray)) {
			idArray.map((id, idIndex) => {
				let _foundDepartment = false;
				this.departments.every((department, departmentIndex) => {
					if (department.id === id) {
						_foundDepartment = true;
						this.departments.splice(departmentIndex, 1);
					}

					return !_foundDepartment;
				});
			});
		}
	}

	update(newData) {
		let _found = false;

		this.departments.every((department, departmentIndex) => {
			if (department.id === newData.id) {
				_found = true;
				this.departments[departmentIndex] = new Department(newData);
			}

			return !_found;
		});
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

	getIds() {
		const ids = [];

		this.departments.map((department, departmentIndex) => {
			ids.push(department.id);
		});

		return ids;
	}

}

export default Departments;