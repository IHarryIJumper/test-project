export const employeesCommActions = {

	//get
	get() {
		return {
			type: 'EMPLOYEE_GET_REQUEST',
			payload: null
		}
	},

	getSuccess() {
		return {
			type: 'EMPLOYEE_GET_SUCCESS',
			payload: null
		}
	},

	getFailed() {
		return {
			type: 'EMPLOYEE_GET_FAILED',
			payload: null
		}
	},


	//add
	add() {
		return {
			type: 'EMPLOYEE_ADD_REQUEST',
			payload: null
		}
	},

	addSuccess() {
		return {
			type: 'EMPLOYEE_ADD_SUCCESS',
			payload: null
		}
	},

	addFailed() {
		return {
			type: 'EMPLOYEE_ADD_FAILED',
			payload: null
		}
	},


	//update
	update() {
		return {
			type: 'EMPLOYEE_UPDATE_REQUEST',
			payload: null
		}
	},

	updateSuccess() {
		return {
			type: 'EMPLOYEE_UPDATE_SUCCESS',
			payload: null
		}
	},

	updateFailed() {
		return {
			type: 'EMPLOYEE_UPDATE_FAILED',
			payload: null
		}
	},


	//delete
	delete() {
		return {
			type: 'EMPLOYEE_DELETE_REQUEST',
			payload: null
		}
	},

	deleteSuccess() {
		return {
			type: 'EMPLOYEE_DELETE_SUCCESS',
			payload: null
		}
	},

	deleteFailed() {
		return {
			type: 'EMPLOYEE_DELETE_FAILED',
			payload: null
		}
	},

}