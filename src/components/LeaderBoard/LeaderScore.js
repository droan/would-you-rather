import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'


export default function LeaderScore({ score }) {
  return (
    <Card>
      <Card.Header className="text-center">Score</Card.Header>
      <Card.Body className="px-1">
        <Card.Text className="text-center">
          <Badge pill variant="primary">
            <span className="h5">{score.toLocaleString()}</span>
          </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

LeaderScore.propTypes = {
  score: PropTypes.number.isRequired,
}
