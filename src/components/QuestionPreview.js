import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import { NavLink } from 'react-router-dom'

import UserAvatar from './UserAvatar'


export default function QuestionPreview({ question }) {
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
            <Card.Text>
              ...{question.optionOne.text}...
            </Card.Text>
            <Button as={NavLink} to={`/questions/${question.id}`} variant="outline-primary" size="sm" block>
              View Poll
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

QuestionPreview.propTypes = {
  question: PropTypes.object.isRequired,
}
