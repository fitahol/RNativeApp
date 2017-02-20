import { connect } from 'react-redux'
import { fetchRequest, fetchFailed } from '../../redux/actions'
import Member from './memberContainer'

const mapActionCreators = {
	fetchRequest: (url, options, key, filter) => fetchRequest(url, options, key, filter),
	fetchFailed: (message) => fetchFailed(message)
}

const mapStateToProps = (state) => ({
	memberList: state.member.memberList
})

export default connect(mapStateToProps, mapActionCreators)(Member)
