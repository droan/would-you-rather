import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { connect } from 'react-redux'
import { useState } from 'react'

import { getAnsweredQuestions, getUnansweredQuestions } from 'store/selectors/questions'
import QuestionList from './QuestionList'


function HomePage({ answeredQuestions, unansweredQuestions }) {
  const [key, setKey] = useState('unanswered')

  return (
    <Row className="justify-content-center">
      <Col md={9} lg={8}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          transition={false}
          justify
        >
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <div className="border border-top-0 rounded-bottom pt-3">
              {unansweredQuestions.length > 0
                ? <QuestionList questions={unansweredQuestions} />
                : <p className="text-center text-muted">You've answered all the questions! &#129395;</p>
              }
            </div>
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <div className="border border-top-0 rounded-bottom pt-3">
              {answeredQuestions.length > 0
                ? <QuestionList questions={answeredQuestions} />
                : <p className="text-center text-muted">You haven't answered any questions. &#129325;</p>
              }
            </div>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  answeredQuestions: getAnsweredQuestions(state),
  unansweredQuestions: getUnansweredQuestions(state),
})

export default connect(mapStateToProps)(HomePage)
