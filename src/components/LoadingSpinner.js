import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { Fragment } from 'react'

import { getIsLoading } from 'store/selectors/loading'


function LoadingSpinner({ isLoading, children }) {
  if (!isLoading) {
    return <Fragment>{children}</Fragment>
  }
  return (
    <Row className="justify-content-center">
      <Col xs="auto">
        <Spinner animation="border" variant="primary" />
      </Col>
    </Row>
  )
}

LoadingSpinner.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
})

export default connect(mapStateToProps)(LoadingSpinner)
