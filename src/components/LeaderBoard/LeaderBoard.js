import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'

import { getLeaders } from 'store/selectors/users'
import Leader from './Leader'


function LeaderBoard({ leaders }) {
  return (
    <Row className="justify-content-center">
      <Col sm="auto">
        {leaders.map(leader => (
          <Leader key={leader.user.id} leader={leader} />
        ))}
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  leaders: getLeaders(state),
})

export default connect(mapStateToProps)(LeaderBoard)
