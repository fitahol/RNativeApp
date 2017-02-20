import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
	fetchSuccess,
	fetchFailed,
	FETCH_REQUESTED
} from './actions'

import 'whatwg-fetch'
import 'es6-promise'

import {
	json2url
} from '../utils/tools'

import $storage from '../utils/storage'

export const fetchData = (url, options = {}) => {
	const self = $storage.local.get('self')
	const token = $storage.local.get('token') || "63345176f2a4ddb517e92dd138d16f2abc3c32bb"

	let domain = 'https://api.fitahol.com'
	if (location.hostname === '127.0.0.1' && location.port === '2211') {
		domain = 'http://0.0.0.0:9999'
	}
	if (~url.indexOf('http')) {
		domain = ''
	}

	const myHeaders = new Headers()
	const querys = {}
	if (token) {
		myHeaders.append('Authorization', `Token ${token}`)
	}
	if (self) {
		querys.self = self
	}

	let defaultOptions = {}

	if (!options.method) {
		defaultOptions = {
			method: 'GET',
			headers: myHeaders,
			querys
		}
	}
	if (options.method === 'POST') {
		myHeaders.append('Content-Type', 'application/json')
		myHeaders.append('Accept', 'application/json')
		const body = JSON.stringify(options.params)
		defaultOptions = {
			method: 'POST',
			headers: myHeaders,
			body
		}
	}
	if (options.method === 'PUT') {
		myHeaders.append('Content-Type', 'application/json')
		myHeaders.append('Accept', 'application/json')
		const body = JSON.stringify(options.params)
		defaultOptions = {
			method: 'PUT',
			headers: myHeaders,
			body
		}
	}
	if (options.method === 'PATCH') {
		myHeaders.append('Content-Type', 'application/json')
		myHeaders.append('Accept', 'application/json')
		const body = JSON.stringify(options.params)
		defaultOptions = {
			method: 'PATCH',
			headers: myHeaders,
			body
		}
	}
	if (options.method === 'DELETE') {
		defaultOptions = {
			method: 'DELETE',
			headers: myHeaders
		}
	}
	// 'GET' method querys
	const fetchQeury = json2url(
			Object.assign(
				{},
				querys || {},
				options.querys || {}
			)
	)
	let paramOpe = '?'
	if (~url.indexOf('?')) {
		paramOpe = '&'
	}
	let fetchUrl = `${domain}${url}${paramOpe}${fetchQeury}`
	if ((/['&']$/).test(fetchUrl)) {
		fetchUrl = fetchUrl.slice(0, fetchUrl.length - 1)
	}

	console.log("storage, fetchUrl", fetchUrl)
	return fetch(`${fetchUrl}`, defaultOptions)
}


export function* fetchRequest(action) {
	console.log("action fetchRequest")
	try {
		const response = yield call(fetchData, action.url, action.options)
		let data = yield Promise.resolve(response)
		.then(queryResponse => {
			if (queryResponse.statusText === 'No Content') {
				return queryResponse || {}
			}
			return queryResponse.text()
		})
		console.log("fetchData response", data)
		yield put(fetchSuccess(action.key, data, action.filter))
	} catch (e) {
		console.log("fetchData catch", e)
		yield put(fetchFailed(e.message))
	}
}

export default function* sagas() {
	yield* takeEvery(FETCH_REQUESTED, fetchRequest)
}

// export function * sagas() {
// 	yield* takeEvery('USER_FETCH_REQUESTED', fetchUser);
// }
