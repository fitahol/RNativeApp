import {AsyncStorage} from 'react-native'

export default {
	local: {
		// 同步
		get(key, cb) {
			try {
				let value = AsyncStorage.getItem(key)
				if (value && cb) cb(value)
			} catch (e) {
				console.log('sync get error', e)
			}
		},
		set(key, value) {
			try {
				AsyncStorage.setItem(key, value)
			} catch (e) {
				console.log('sync set error', e)
			}
		},
		remove(key) {
			try {
				AsyncStorage.removeItem('key')
			} catch (e) {
				console.log('sync remove error', e)
			}
		}
	}
}
