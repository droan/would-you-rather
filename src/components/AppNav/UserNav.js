import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { Fragment } from 'react'

import { getIsUserAuth, getAuthUser } from 'store/selectors/auth'
import { logoutUser } from 'store/actions/auth'
import UserAvatar from '../UserAvatar'


function UserNav({ isUserAuth, user, onLogout }) {
  if (!isUserAuth) {
    return null
  }
  return (
    <Fragment>
      <span className="navbar-text">
        Hello, {user.name}
      </span>
      <UserAvatar user={user} size="small" className="mx-2" />
      <Nav>
        <Nav.Link href="#" onSelect={onLogout}>Logout</Nav.Link>
      </Nav>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  isUserAuth: getIsUserAuth(state),
  user: getAuthUser(state),
})

const mapDispatchToProps = {
  onLogout: logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNav)
