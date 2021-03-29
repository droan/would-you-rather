import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Fragment } from 'react'
import { getIsUserAuth } from 'store/selectors/auth'

import Login from './Login'


function LoginRequired({ isUserAuth, children }) {
  return !isUserAuth ? <Login /> : <Fragment>{children}</Fragment>
}

// Exclude state props
LoginRequired.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = (state) => ({
  isUserAuth: getIsUserAuth(state),
})

export default connect(mapStateToProps)(LoginRequired)
