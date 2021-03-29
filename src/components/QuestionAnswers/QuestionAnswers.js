import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import QuestionOption from './QuestionOption'
import UserAvatar from '../UserAvatar'


export default function QuestionAnswers({ question, answer }) {
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  return (
    <Card>
      <Card.Header className="font-weight-bold">Asked by {question.author.name}</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={3} className="border-right">
            <UserAvatar user={question.author} size="big" />
          </Col>
          <Col xs={9}>
            <Card.Title>Results:</Card.Title>
            {['optionOne', 'optionTwo'].map((optionName) => {
              const option = question[optionName]
              return (
                <QuestionOption
                  key={optionName}
                  text={option.text}
                  votes={option.votes.length}
                  total={totalVotes}
                  selected={answer === optionName}
                  className="mt-2"
                />
              )
            })}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

QuestionAnswers.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
}
