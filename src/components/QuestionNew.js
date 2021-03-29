import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { handleAddQuestion } from 'store/actions/questions'


function QuestionNew({ onSubmitForm }) {
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const canSubmit = optionOne && optionTwo && !submitted

  const handleChange = (setOption) => (event) => {
    setOption(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (canSubmit) {
      setSubmitted(true)
      onSubmitForm(optionOne, optionTwo)
    }
  }

  return (
    <Row className="justify-content-center">
      <Col md={7} className="pb-3">
        <Card>
          <Card.Header className="font-weight-bold">Create New Question</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control type="text" placeholder="Option One" value={optionOne} onChange={handleChange(setOptionOne)} />
                <Row className="m-1">
                  <Col><hr /></Col>
                  <Col md="auto" className="p-1">OR</Col>
                  <Col><hr /></Col>
                </Row>
                <Form.Control type="text" placeholder="Option Two" value={optionTwo} onChange={handleChange(setOptionTwo)} />
              </Form.Group>
              <Button variant="primary" type="submit" block disabled={!canSubmit}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch, { history }) => ({
  onSubmitForm: (optionOne, optionTwo) => {
    dispatch(handleAddQuestion(optionOne, optionTwo))
      .then(question => history.push(`/question/${question.id}`))
  }
})

export default connect(null, mapDispatchToProps)(withRouter(QuestionNew))
