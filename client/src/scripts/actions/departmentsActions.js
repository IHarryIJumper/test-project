export const departmentsActions = {

	setDepartments(employees) {
		return {
			type: 'SET_DEPARTMENTS',
			payload: {
				employees
			}
		}
	},

	add(employee) {
		return {
			type: 'ADD_DEPARTMENT',
			payload: {
				employee
			}
		}
	},

	update(newData) {
		return {
			type: 'UPDATE_DEPARTMENT',
			payload: {
				newData
			}
		}
	},

	delete(id) {
		return {
			type: 'DELETE_DEPARTMENT',
			payload: {
				id
			}
		}
	},
	
}