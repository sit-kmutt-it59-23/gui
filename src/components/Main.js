import React, { Component } from 'react';
import {
    Row,
    Col,
    Container
    } from 'reactstrap';

const InsideLayout = ({ sidebar, children }) => {
    if (sidebar) {
        return (
            <React.Fragment>
                <Col sm="12" md="3">{sidebar}</Col>
                <Col sm="12" md="9">{children}</Col>
            </React.Fragment>
        );
    }
    else {
       return (
            <Col>{children}</Col>     
        );
    }
}
    

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Container>
                    <Row>
                        <InsideLayout sidebar={this.props.sidebar}>
                            {this.props.children}
                        </InsideLayout>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Main;