// Action Types
export const FETCH_REQUESTED = 'FETCH_REQUESTED';
export const FETCH_SUCCEDED = 'FETCH_SUCCEDED';
export const FETCH_FAILED = 'FETCH_FAILED';

// Action Creators
export function fetchRequest(url, options, key, filter) {
	return {
		type: FETCH_REQUESTED,
		options,
		url,
		key,
		filter
	}
}

export function fetchSuccess(key, response, filter = (data) => data) {
	console.log("fetchSuccess actions")
	return {
		type: FETCH_SUCCEDED,
		data: response,
		key,
		filter
	}
}


export const fetchFailed = message => ({
	type: FETCH_FAILED,
	message
})
