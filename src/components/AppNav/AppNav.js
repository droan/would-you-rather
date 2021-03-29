import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

import UserNav from './UserNav'
import style from './AppNav.module.scss'


function AppNav() {
  return (
    <Navbar bg="light" expand="md" className={`${style.navbar} mb-md-5 mb-3`}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} activeClassName="active" exact to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/new">New Question</Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/board">Leader Board</Nav.Link>
          </Nav>
          <UserNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav
