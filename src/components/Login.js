import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { useState } from 'react'

import { getUserList } from 'store/selectors/users'
import { loginUser } from 'store/actions/auth'


function Login({ users, onSubmitForm }) {
  const [userId, setUserId] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const canSubmit = userId && !submitted

  const handleChange = (event) => {
    setUserId(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (canSubmit) {
      setSubmitted(true)
      onSubmitForm(userId)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <Card>
            <Card.Header className="font-weight-bold">Welcome to the Would You Rather App!</Card.Header>
            <Card.Body>
              <p className="text-muted">Please sign in to continue</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control as="select" value={userId} onChange={handleChange}>
                    <option value="" hidden>Select User</option>
                    {users.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" block disabled={!canSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  users: getUserList(state),
})

const mapDispatchToProps = {
  onSubmitForm: loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
