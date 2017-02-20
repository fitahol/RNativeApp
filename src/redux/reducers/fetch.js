import {
	FETCH_REQUESTED,
	FETCH_SUCCEDED,
	FETCH_FAILED,
} from '../actions';

import { ActionConst } from 'react-native-router-flux';

export default function fetchState(state = {}, action) {
	switch (action.type) {
		case FETCH_SUCCEDED:
			// 给对象某个key赋值, 比如 : a.b.c = d
			function recLookup(obj, path, value) {
				if (path.length === 1) {
					obj[path[0]] = value
					return
				}
				recLookup(obj[path[0]], path.slice(1), value)
			}
			console.log("FETCH_REQUESTED, reducers", state)
			const newState = JSON.parse(JSON.stringify(state))
			let resultData
			if (Array.isArray(action.key)) {
				recLookup(newState, action.key, action.filter(action.data))
			} else {
				resultData = action.filter(action.data)
				if (action.key) {
					newState[action.key] = resultData
				}
			}
			return newState;
		case FETCH_FAILED:
			return {
				...state,
				isFetching: false,
				message: action.message,
			};
		default:
			return state;
	}
}
