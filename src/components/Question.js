import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'

import UserAvatar from './UserAvatar'


export default function Question({ question, onAnswer }) {
  const [option, setOption] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const canSubmit = option && !submitted

  const handleChange = (event) => {
    setOption(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (canSubmit) {
      setSubmitted(true)
      onAnswer(question, option)
    }
  }

  return (
    <Card>
      <Card.Header className="font-weight-bold">{question.author.name} asks:</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={3} className="border-right">
            <UserAvatar user={question.author} size="big" />
          </Col>
          <Col xs={9}>
            <Card.Title>Would you rather</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                {['optionOne', 'optionTwo'].map(opt => (
                  <Form.Check
                    key={opt}
                    name="options"
                    type="radio"
                    id={opt}
                    value={opt}
                    label={question[opt].text}
                    onChange={handleChange}
                    className="mb-2"
                  />
                ))}
              </Form.Group>
              <Button variant="primary" type="submit" block disabled={!canSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
}
