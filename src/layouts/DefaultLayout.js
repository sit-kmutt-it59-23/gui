import React, { Component, Fragment } from 'react'
import { Row, Col, Container } from 'reactstrap'
import PropTypes from 'prop-types'


import Navbar from '../components/NavbarCustom'

class DefaultLayout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Container fluid className="mt-3 mb-3">
                    <Row>
                        <Col sm="12" md="2">{this.props.left}</Col>
                        <Col sm="12" md="8">{this.props.middle}</Col>
                        <Col sm="12" md="2">{this.props.right}</Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

DefaultLayout.propTypes = {
    left: PropTypes.element,
    middle: PropTypes.element,
    right: PropTypes.element
}

export default DefaultLayout