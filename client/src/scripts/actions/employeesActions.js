export const employeesActions = {

	setEmployees(employees) {
		return {
			type: 'SET_EMPLOYEES',
			payload: {
				employees
			}
		}
	},

	add(employee) {
		return {
			type: 'ADD_EMPLOYEE',
			payload: {
				employee
			}
		}
	},

	update(newData) {
		return {
			type: 'UPDATE_EMPLOYEE',
			payload: {
				newData
			}
		}
	},

	delete(id) {
		return {
			type: 'DELETE_EMPLOYEE',
			payload: {
				id
			}
		}
	},

	deleteSeveral(idArray) {
		return {
			type: 'DELETE_EMPLOYEES',
			payload: {
				idArray
			}
		}
	},

}