import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import LeaderScore from './LeaderScore'
import UserAvatar from '../UserAvatar'
import style from './Leader.module.scss'


export default function Leader({ leader }) {
  const user = leader.user
  return (
    <Row className={style.leaderRow}>
      <Col xs={3} className={style.avatarCol}>
        <UserAvatar user={user} size="big" />
      </Col>
      <Col xs={6} className={style.nameCol}>
        <div className={style.name}>{user.name}</div>
        <div className={style.count}>
          Answered questions
          <span className="float-right">{leader.answers_count}</span>
        </div>
        <div className={style.spacer}></div>
        <div className={style.count}>
          Created questions
          <span className="float-right">{leader.questions_count}</span>
        </div>
      </Col>
      <Col xs={3}>
        <LeaderScore score={leader.score} />
      </Col>
    </Row>
  )
}

Leader.propTypes = {
  leader: PropTypes.object.isRequired,
}
