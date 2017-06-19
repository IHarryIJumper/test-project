export const get = (path, successFunction, errorFunction) => {
	const http = new XMLHttpRequest();

	http.open("GET", getUrl() + "/" + path, true);

	http.setRequestHeader("content-type", "application/json");

	http.onreadystatechange = function () {
		if (http.readyState === 4) {

			if (http.status === 200) {
				if (successFunction != undefined) {
					successFunction(http.responseText);
				}
			} else {
				if (errorFunction != undefined) {
					errorFunction(http.responseText);
				}

				console.log('GET failed |', 'Path:', path, 'Message:', http.responseText);
			}
		}
	}

	http.send(null);
}

export const post = (path, data, successFunction, errorFunction) => {

	const http = new XMLHttpRequest();

	http.open("POST", getUrl() + "/" + path, true);

	http.setRequestHeader("content-type", "application/json");

	http.onreadystatechange = function () {
		if (http.readyState === 4) {
			if (http.status === 201) {
				if (successFunction != undefined) {
					successFunction(http.responseText);
				}
			} else {
				if (errorFunction != undefined) {
					errorFunction(http.responseText);
				}

				console.log('POST failed |', 'Path:', path, 'Message:', http.responseText);
			}
		}
	}
	http.send(JSON.stringify(data));
}

export const put = (path, id, data, successFunction, errorFunction) => {

	const http = new XMLHttpRequest();

	http.open("PUT", getUrl() + "/" + path + "/" + id, true);

	http.setRequestHeader("content-type", "application/json");

	http.onreadystatechange = function () {
		if (http.readyState === 4) {

			
			if (http.status === 200) {
				if (successFunction != undefined) {
					successFunction(http.responseText);
				}
			} else {
				if (errorFunction != undefined) {
					errorFunction(http.responseText);
				}

				console.log('PUT failed |', 'Path:', path, 'Id:', id, 'Message:', http.responseText);
			}
		}
	}

	http.send(JSON.stringify(data));
}

export const deleteRequest = (path, id, successFunction, errorFunction) => {

	const http = new XMLHttpRequest();

	http.open("DELETE", getUrl() + "/" + path + "/" + id, true);

	http.onreadystatechange = function () {
		if (http.readyState === 4) {

			
			if (http.status === 200) {
				if (successFunction != undefined) {
					successFunction(http.responseText);
				}
			} else {
				if (errorFunction != undefined) {
					errorFunction(http.responseText);
				}

				console.log('PUT failed |', 'Path:', path, 'Id:', id, 'Message:', http.responseText);
			}
		}
	}

	http.send(null);
}

const getUrl = () => {
	if (process.env.NODE_ENV === 'serverProduction') {
	// if (process.env.NODE_ENV === 'production') {
		return 'http://iharryijumper.asuscomm.com:3000';
	}
	if (process.env.NODE_ENV === 'localTest') {
		return 'http://192.168.0.186:3000';
	} else {
		return 'http://localhost:3000';
	}
};

const Request = {
	get,
	post,
	put,
	deleteRequest
};

export default Request;