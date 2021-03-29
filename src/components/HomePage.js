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
              <QuestionList questions={unansweredQuestions} />
            </div>
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <div className="border border-top-0 rounded-bottom pt-3">
              <QuestionList questions={answeredQuestions} />
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
