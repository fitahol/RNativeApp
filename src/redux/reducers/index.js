import { combineReducers } from 'redux';
import fetchState from './fetch'

import member from '../../pages/member/memberRedux'

export default combineReducers({
	fetchState,
	member: member
});

export const injectReducer = (store, {
	key,
	reducer
}) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(reducers(store.asyncReducers))
}
