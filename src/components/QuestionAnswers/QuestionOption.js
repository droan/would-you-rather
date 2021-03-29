import Badge from 'react-bootstrap/Badge'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import style from './QuestionOption.module.scss'


export default function QuestionOption({ text, votes, total, selected, className }) {
  const percent = ((votes / total) * 100).toFixed(1)
  return (
    <div className={`border rounded p-2 ${style.option} ${selected && style.selected} ${className}`}>
      <Row>
        <Col className={style.text}>
          <span>Would you rather {text}?</span>
          {selected && (
            <Badge pill variant="secondary" className="float-right">Your vote</Badge>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <ProgressBar now={percent} label={`${percent}%`} variant="primary" className={style.progress} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.votes} md="auto">{votes} out of {total} votes</Col>
      </Row>
    </div>
  )
}

QuestionOption.propTypes = {
  text: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  className: PropTypes.string,
}
