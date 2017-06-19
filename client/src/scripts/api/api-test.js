import Promise from 'bluebird';

const fetchData = (data, yeah) => {
	
	console.log(data, yeah);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
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