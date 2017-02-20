import { globleHandler } from '../../redux/reducers'

const ACTION_HANDLERS = {
	...globleHandler
}

const initialState = {
	memberList: {"results": []}
}


export default function memberReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]
	return handler ? handler(state, action) : state
}
