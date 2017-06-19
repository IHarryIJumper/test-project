import Employee from './employee.js';

class Employees {
	constructor(employees) {
		if (arguments.length === 0) {
			this.setDefault();
		} else {
			this.setEmployees(employees);
		}
	}

	setDefault() {
		this.employees = [];
	}

	setEmployees(employees) {
		if (Array.isArray(employees)) {
			this.employees = [];
			employees.map((employee, employeeIndex) => {
				this.employees.push(new Employee(employee));
			});
		} else {
			console.error('Employees Model: ', 'Wrong data type');
			this.setDefault();
		}
	}

	add(employee) {
		let elementId = 0;

		if (this.employees.length !== 0) {
			elementId = this.employees[this.employees.length - 1].id + 1;
		}

		this.employees.push(new Employee(employee, elementId));
	}

	delete(id) {
		let _found = false;

		this.employees.every((employee, employeeIndex) => {
			if (employee.id === id) {
				_found = true;
				this.employees.splice(employeeIndex, 1);
			}

			return !_found;
		});
	}

	deleteSeveral(idArray) {
		if (Array.isArray(idArray)) {
			
			idArray.map((id, idIndex) => {
				let _foundEmployee = false;
				this.employees.every((employee, employeeIndex) => {
					if (employee.id === id) {
						_foundEmployee = true;
						this.employees.splice(employeeIndex, 1);
					}

					return !_foundEmployee;
				});
			});
		}
	}

	update(newData) {
		let _found = false;

		this.employees.every((employee, employeeIndex) => {
			if (employee.id === newData.id) {
				_found = true;
				this.employees[employeeIndex] = new Employee(newData);
			}

			return !_found;
		});
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

export default Employees;