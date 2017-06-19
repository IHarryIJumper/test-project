export const departmentsActions = {

	setDepartments(departments) {
		return {
			type: 'SET_DEPARTMENTS',
			payload: {
				departments
			}
		}
	},

	add(department) {
		return {
			type: 'ADD_DEPARTMENT',
			payload: {
				department
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

	deleteSeveral(idArray) {
		return {
			type: 'DELETE_DEPARTMENTS',
			payload: {
				idArray
			}
		}
	},
	
}