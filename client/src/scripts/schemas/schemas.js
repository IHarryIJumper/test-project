export const EmployeeSchema = {
	"id": "/EmployeeSchema",
	"type": "object",
	"properties": {
		"id": {
			"type": "integer",
			"minimum": 0
		},
		"firstName": {
			"type": "string"
		},
		"lastName": {
			"type": "string"
		},
		"departmentId": {
			"type": "integer",
			"minimum": 0
		}
	}
};

export const DepartmentSchema = {
	"id": "/DepartmentSchema",
	"type": "object",
	"properties": {
		"id": {
			"type": "integer",
			"minimum": 0
		},
		"name": {
			"type": "string"
		}
	}
};

const schemas = {
	EmployeeSchema,
	DepartmentSchema
};

export default schemas;