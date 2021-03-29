import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import QuestionPreview from './QuestionPreview'


export default function QuestionList({ questions }) {
  return questions.map(question => (
    <Row key={question.id}>
      <Col className="mb-3 mx-3">
        <QuestionPreview question={question} />
      </Col>
    </Row>
  ))
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(Object).isRequired,
}
