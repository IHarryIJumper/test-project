import PreloaderComponent from '../../client/src/scripts/components/preloader/preloader.jsx';

import Departments from '../../client/src/scripts/models/departments.js';

let DepartmentsModel = new Departments();

const departmentsData = [{
		"id": 0,
		"name": "First Department"
	},
	{
		"id": 1,
		"name": "Second Department"
	}
];

test('Departments model empty init', () => {
	expect(DepartmentsModel.departments).toHaveLength(0);
});

test('Departments model to be array', () => {
	expect(Array.isArray(DepartmentsModel.departments)).toBe(true);
});

test('Departments model normal init', () => {
	DepartmentsModel = new Departments(departmentsData);
	expect(DepartmentsModel.departments).toHaveLength(2);

	expect(DepartmentsModel.departments[0].id).toBe(0);
	expect(DepartmentsModel.departments[0].name).toBe("First Department");

	expect(DepartmentsModel.departments[1].id).toBe(1);
	expect(DepartmentsModel.departments[1].name).toBe("Second Department");
});

test('Departments model add new department', () => {
	const newDepartment = {
		"id": 2,
		"name": "Test"
	};
	DepartmentsModel.add(newDepartment);
	expect(DepartmentsModel.departments).toHaveLength(3);

	expect(DepartmentsModel.departments[2].id).toBe(2);
	expect(DepartmentsModel.departments[2].name).toBe("Test");
});

test('Departments model update department', () => {
	const updatedDepartment = {
		"id": 2,
		"name": "Updated_Test"
	};
	DepartmentsModel.update(updatedDepartment);
	expect(DepartmentsModel.departments).toHaveLength(3);

	expect(DepartmentsModel.departments[2].id).toBe(2);
	expect(DepartmentsModel.departments[2].name).toBe("Updated_Test");
});

test('Departments model delete department', () => {
	DepartmentsModel.delete(2);
	expect(DepartmentsModel.departments).toHaveLength(2);

	expect(DepartmentsModel.departments[DepartmentsModel.departments.length - 1].id).not.toBe(2);
	expect(DepartmentsModel.departments[DepartmentsModel.departments.length - 1].name).not.toBe("Updated_Test");
});

test('Departments model delete several departments', () => {
	DepartmentsModel.deleteSeveral([0, 1]);
	expect(DepartmentsModel.departments).toHaveLength(0);
});

test('Departments model throw error on wrong data type', () => {
	const wrongDepartment = {
		"id": "0",
		"name": "Test"
	};

	expect(() => {
		DepartmentsModel.add(wrongDepartment);
	}).not.toThrow('Department model: Missing data on setDepartmentWithId');

	wrongDepartment.name = 0;

	expect(() => {
		DepartmentsModel.add(wrongDepartment);
	}).toThrow('Department model: Missing data on setDepartmentWithId');
});