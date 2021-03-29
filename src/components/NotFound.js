import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <Row className="justify-content-center">
      <Col md="auto">
        <legend>Page Not Found</legend>
        <Link to="/">Go Home</Link>
      </Col>
    </Row>
  )
}
