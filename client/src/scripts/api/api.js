import Promise from 'bluebird';

import Request from './requestHelper/request.js';


//employees

const getEmployees = () => {
	return new Promise((resolve, reject) => {
		Request.get('employee', (response) => {
			let data = [];
			try {
				if (typeof response === 'string') {
					data = JSON.parse(response);
				}
			} catch (e) {
				console.error('GET employees data parse failed', 'Data:', response);
			}
			resolve(data);
		}, (error) => {
			reject(error);
		})
	});
};

const addEmployee = (data) => {
	return new Promise((resolve, reject) => {
		Request.post('employee', data, (response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		})
	});
};

const updateEmployee = (id, data) => {
	return new Promise((resolve, reject) => {
		Request.put('employee', id, data, (response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		})
	});
};

const deleteEmployee = (id, data) => {
	return new Promise((resolve, reject) => {
		Request.delete('employee', id, (response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		})
	});
};


//departments
const getDepartments = () => {
	return new Promise((resolve, reject) => {
		Request.get('department', (response) => {
			let data = [];
			try {
				if (typeof response === 'string') {
					data = JSON.parse(response);
				}
			} catch (e) {
				console.error('GET employees data parse failed', 'Data:', response);
			}
			resolve(data);
		}, (error) => {
			reject(error);
		})
	});
};

const addDepartment = (data) => {
	return new Promise((resolve, reject) => {
		Request.post('department', data, (response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		})
	});
};

const updateDepartment = (id, data) => {
	return new Promise((resolve, reject) => {
		Request.put('department', id, data, (response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		})
	});
};

const deleteDepartment = (id, data) => {
	return new Promise((resolve, reject) => {
		Request.delete('department', id, (response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		})
	});
};

const API = {
	getEmployees,
	addEmployee,
	updateEmployee,
	deleteEmployee,
	getDepartments,
	addDepartment,
	updateDepartment,
	deleteDepartment
};

export default API;