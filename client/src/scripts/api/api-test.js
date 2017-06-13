import Promise from 'bluebird';

const fetchData = () => {
	debugger;
	return new Promise((resolve, reject) => {
		debugger;
		setTimeout(() => {

			debugger;
			resolve({
				data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			});
		}, 2000);
	});
};

const API = {
	fetchData
};

export default API;