import PreloaderComponent from '../../client/src/scripts/components/preloader/preloader.jsx';

import Employees from '../../client/src/scripts/models/employees.js';

let EmployeesModel = new Employees();

const employeesData = [{
		"id": 0,
		"firstName": "Andrey",
		"lastName": "Menshikh",
		"departmentId": 0
	},
	{
		"id": 1,
		"firstName": "Ivan",
		"lastName": "Ivanov",
		"departmentId": 1
	}
];

test('Employees model empty init', () => {
	expect(EmployeesModel.employees).toHaveLength(0);
});

test('Employees model to be array', () => {
	expect(Array.isArray(EmployeesModel.employees)).toBe(true);
});

test('Employees model normal init', () => {
	EmployeesModel = new Employees(employeesData);
	expect(EmployeesModel.employees).toHaveLength(2);

	expect(EmployeesModel.employees[0].id).toBe(0);
	expect(EmployeesModel.employees[0].firstName).toBe("Andrey");
	expect(EmployeesModel.employees[0].lastName).toBe("Menshikh");
	expect(EmployeesModel.employees[0].departmentId).toBe(0);

	expect(EmployeesModel.employees[1].id).toBe(1);
	expect(EmployeesModel.employees[1].firstName).toBe("Ivan");
	expect(EmployeesModel.employees[1].lastName).toBe("Ivanov");
	expect(EmployeesModel.employees[1].departmentId).toBe(1);
});

test('Employees model add new employee', () => {
	const newEmployee = {
		"id": 2,
		"firstName": "Test",
		"lastName": "Test",
		"departmentId": 1
	};
	EmployeesModel.add(newEmployee);
	expect(EmployeesModel.employees).toHaveLength(3);

	expect(EmployeesModel.employees[2].id).toBe(2);
	expect(EmployeesModel.employees[2].firstName).toBe("Test");
	expect(EmployeesModel.employees[2].lastName).toBe("Test");
	expect(EmployeesModel.employees[2].departmentId).toBe(1);
});

test('Employees model update employee', () => {
	const updatedEmployee = {
		"id": 2,
		"firstName": "Updated_Test",
		"lastName": "Updated_Test",
		"departmentId": 0
	};
	EmployeesModel.update(updatedEmployee);
	expect(EmployeesModel.employees).toHaveLength(3);

	expect(EmployeesModel.employees[2].id).toBe(2);
	expect(EmployeesModel.employees[2].firstName).toBe("Updated_Test");
	expect(EmployeesModel.employees[2].lastName).toBe("Updated_Test");
	expect(EmployeesModel.employees[2].departmentId).toBe(0);
});

test('Employees model delete employee', () => {
	EmployeesModel.delete(2);
	expect(EmployeesModel.employees).toHaveLength(2);

	expect(EmployeesModel.employees[EmployeesModel.employees.length - 1].id).not.toBe(2);
	expect(EmployeesModel.employees[EmployeesModel.employees.length - 1].firstName).not.toBe("Updated_Test");
	expect(EmployeesModel.employees[EmployeesModel.employees.length - 1].lastName).not.toBe("Updated_Test");
	expect(EmployeesModel.employees[EmployeesModel.employees.length - 1].departmentId).not.toBe(0);
});

test('Employees model delete several employees', () => {
	EmployeesModel.deleteSeveral([0, 1]);
	expect(EmployeesModel.employees).toHaveLength(0);
});

test('Employees model throw error on wrong data type', () => {
	const wrongEmployee = {
		"id": "0",
		"firstName": "Test",
		"lastName": "Test",
		"departmentId": "1"
	};
	
	expect(() => {
		EmployeesModel.add(wrongEmployee);
	}).toThrow('Employee model: Missing data on setEmployeeWithId');
});