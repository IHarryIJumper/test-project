const defaultState = {
	employeeGetRequest: false,
	employeeGetSuccess: false,
	employeeGetFailed: false,
	employeeAddRequest: false,
	employeeAddSuccess: false,
	employeeAddFailed: false,
	employeeUpdateRequest: false,
	employeeUpdateSuccess: false,
	employeeUpdateFailed: false,
	employeeDeleteRequest: false,
	employeeDeleteSuccess: false,
	employeeDeleteFailed: false,
	departmentGetRequest: false,
	departmentGetSuccess: false,
	departmentGetFailed: false,
	departmentAddRequest: false,
	departmentAddSuccess: false,
	departmentAddFailed: false,
	departmentUpdateRequest: false,
	departmentUpdateSuccess: false,
	departmentUpdateFailed: false,
	departmentDeleteRequest: false,
	departmentDeleteSuccess: false,
	departmentDeleteFailed: false
};

const commReducer = (state = defaultState, action) => {
	let _newState = Object.assign({}, state);
	switch (action.type) {

		//E-GET
		case 'EMPLOYEE_GET_REQUEST':
			_newState.employeeGetRequest = true;
			_newState.employeeGetSuccess = false;
			_newState.employeeGetFailed = false;
			break;
		case 'EMPLOYEE_GET_SUCCESS':
			_newState.employeeGetRequest = false;
			_newState.employeeGetSuccess = true;
			_newState.employeeGetFailed = false;
			break;
		case 'EMPLOYEE_GET_FAILED':
			_newState.employeeGetRequest = false;
			_newState.employeeGetSuccess = false;
			_newState.employeeGetFailed = true;
			break;

		//E-ADD
		case 'EMPLOYEE_ADD_REQUEST':
			_newState.employeeAddRequest = true;
			_newState.employeeAddSuccess = false;
			_newState.employeeAddFailed = false;
			break;
		case 'EMPLOYEE_ADD_SUCCESS':
			_newState.employeeAddRequest = false;
			_newState.employeeAddSuccess = true;
			_newState.employeeAddFailed = false;
			break;
		case 'EMPLOYEE_ADD_FAILED':
			_newState.employeeAddRequest = false;
			_newState.employeeAddSuccess = false;
			_newState.employeeAddFailed = true;
			break;

		//E-UPDATE
		case 'EMPLOYEE_UPDATE_REQUEST':
			_newState.employeeUpdateRequest = true;
			_newState.employeeUpdateSuccess = false;
			_newState.employeeUpdateFailed = false;
			break;
		case 'EMPLOYEE_UPDATE_SUCCESS':
			_newState.employeeUpdateRequest = false;
			_newState.employeeUpdateSuccess = true;
			_newState.employeeUpdateFailed = false;
			break;
		case 'EMPLOYEE_UPDATE_FAILED':
			_newState.employeeUpdateRequest = false;
			_newState.employeeUpdateSuccess = false;
			_newState.employeeUpdateFailed = true;
			break;

		//E-UPDATE
		case 'EMPLOYEE_DELETE_REQUEST':
			_newState.employeeDeleteRequest = true;
			_newState.employeeDeleteSuccess = false;
			_newState.employeeDeleteFailed = false;
			break;
		case 'EMPLOYEE_DELETE_SUCCESS':
			_newState.employeeDeleteRequest = false;
			_newState.employeeDeleteSuccess = true;
			_newState.employeeDeleteFailed = false;
			break;
		case 'EMPLOYEE_DELETE_FAILED':
			_newState.employeeDeleteRequest = false;
			_newState.employeeDeleteSuccess = false;
			_newState.employeeDeleteFailed = true;
			break;

		//D-GET
		case 'DEPARTMENT_GET_REQUEST':
			_newState.departmentGetRequest = true;
			_newState.departmentGetSuccess = false;
			_newState.departmentGetFailed = false;
			break;
		case 'DEPARTMENT_GET_SUCCESS':
			_newState.departmentGetRequest = false;
			_newState.departmentGetSuccess = true;
			_newState.departmentGetFailed = false;
			break;
		case 'DEPARTMENT_GET_FAILED':
			_newState.departmentGetRequest = false;
			_newState.departmentGetSuccess = false;
			_newState.departmentGetFailed = true;
			break;

		//D-ADD
		case 'DEPARTMENT_ADD_REQUEST':
			_newState.departmentAddRequest = true;
			_newState.departmentAddSuccess = false;
			_newState.departmentAddFailed = false;
			break;
		case 'DEPARTMENT_ADD_SUCCESS':
			_newState.departmentAddRequest = false;
			_newState.departmentAddSuccess = true;
			_newState.departmentAddFailed = false;
			break;
		case 'DEPARTMENT_ADD_FAILED':
			_newState.departmentAddRequest = false;
			_newState.departmentAddSuccess = false;
			_newState.departmentAddFailed = true;
			break;

		//D-UPDATE
		case 'DEPARTMENT_UPDATE_REQUEST':
			_newState.departmentUpdateRequest = true;
			_newState.departmentUpdateSuccess = false;
			_newState.departmentUpdateFailed = false;
			break;
		case 'DEPARTMENT_UPDATE_SUCCESS':
			_newState.departmentUpdateRequest = false;
			_newState.departmentUpdateSuccess = true;
			_newState.departmentUpdateFailed = false;
			break;
		case 'DEPARTMENT_UPDATE_FAILED':
			_newState.departmentUpdateRequest = false;
			_newState.departmentUpdateSuccess = false;
			_newState.departmentUpdateFailed = true;
			break;

		//D-UPDATE
		case 'DEPARTMENT_DELETE_REQUEST':
			_newState.departmentDeleteRequest = true;
			_newState.departmentDeleteSuccess = false;
			_newState.departmentDeleteFailed = false;
			break;
		case 'DEPARTMENT_DELETE_SUCCESS':
			_newState.departmentDeleteRequest = false;
			_newState.departmentDeleteSuccess = true;
			_newState.departmentDeleteFailed = false;
			break;
		case 'DEPARTMENT_DELETE_FAILED':
			_newState.departmentDeleteRequest = false;
			_newState.departmentDeleteSuccess = false;
			_newState.departmentDeleteFailed = true;
			break;
		default:
			_newState = state;
			break;
	}

	return _newState;
};

export default commReducer;