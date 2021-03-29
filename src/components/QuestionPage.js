import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'

import { getAuthUser } from 'store/selectors/auth'
import { getQuestionsWithAuthor } from 'store/selectors/questions'
import { handleAnswerQuestion } from 'store/actions/questions'
import NotFound from './NotFound'
import Question from './Question'
import QuestionAnswers from './QuestionAnswers'


function QuestionPage({ question, answer, onAnswer }) {
  if (question == null) {
    return (
      <NotFound />
    )
  }

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        {answer == null
          ? <Question question={question} onAnswer={onAnswer} />
          : <QuestionAnswers question={question} answer={answer} />}
      </Col>
    </Row>
  )
}

function mapStateToProps(state, { match }) {
  const { id } = match.params
  const user = getAuthUser(state)
  const question = getQuestionsWithAuthor(state)[id]
  return {
    question: question,
    answer: question ? user.answers[question.id] : null,
  }
}

const mapDispatchToProps = {
  onAnswer: handleAnswerQuestion,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
