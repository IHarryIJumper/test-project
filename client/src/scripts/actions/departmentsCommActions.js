export const departmentsCommActions = {

	//get
	get() {
		return {
			type: 'DEPARTMENT_GET_REQUEST',
			payload: null
		}
	},

	getSuccess() {
		return {
			type: 'DEPARTMENT_GET_SUCCESS',
			payload: null
		}
	},

	getFailed() {
		return {
			type: 'DEPARTMENT_GET_FAILED',
			payload: null
		}
	},


	//add
	add() {
		return {
			type: 'DEPARTMENT_ADD_REQUEST',
			payload: null
		}
	},

	addSuccess() {
		return {
			type: 'DEPARTMENT_ADD_SUCCESS',
			payload: null
		}
	},

	addFailed() {
		return {
			type: 'DEPARTMENT_ADD_FAILED',
			payload: null
		}
	},


	//update
	update() {
		return {
			type: 'DEPARTMENT_UPDATE_REQUEST',
			payload: null
		}
	},

	updateSuccess() {
		return {
			type: 'DEPARTMENT_UPDATE_SUCCESS',
			payload: null
		}
	},

	updateFailed() {
		return {
			type: 'DEPARTMENT_UPDATE_FAILED',
			payload: null
		}
	},


	//delete
	delete() {
		return {
			type: 'DEPARTMENT_DELETE_REQUEST',
			payload: null
		}
	},

	deleteSuccess() {
		return {
			type: 'DEPARTMENT_DELETE_SUCCESS',
			payload: null
		}
	},

	deleteFailed() {
		return {
			type: 'DEPARTMENT_DELETE_FAILED',
			payload: null
		}
	},
}