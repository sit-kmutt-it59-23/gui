import React, { Component, Fragment } from 'react'
import { Row, Col, Container } from 'reactstrap'
import PropTypes from 'prop-types'


import Navbar from '../components/NavbarCustom'

class DefaultLayout extends Component {
    render() {
        let element
        
        if(this.props.right){
            element = <Fragment>
                            <Col sm="12" md="8">{this.props.middle}</Col>
                            <Col sm="12" md="2">{this.props.right}</Col>
                      </Fragment>
        } else{
            element =  <Col sm="12" md="10">{this.props.middle}</Col>
        }

        return (
            <Fragment>
                <Navbar />
                <Container fluid className="mt-3 mb-3">
                    <Row>
                        <Col sm="12" md="2">{this.props.left}</Col>
                        {element}
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