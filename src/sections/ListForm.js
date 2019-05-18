import React from 'react';
import { Row, FormGroup, Col } from 'reactstrap';
import styled from 'styled-components';

const InputCustom = styled.input`
    border-radius:10px;
    border-color:#707070;
    height:35px;
    width:60px;
`
const ListForm = (props) =>  {
    return (
        <FormGroup>
            <Row>
                <Col md="6" className="col-form-label">
                    {props.number ? `${props.number}. ` : '' }{props.description}
                </Col>
                <Col md="1" className="col-form-label">จำนวน</Col>
                <Col md={{size:1,offset:1}}><InputCustom className="form-control" min="0" type="number" /></Col>
                <Col md={{size:1,offset:1}} className="col-form-label">{props.type}</Col>
            </Row>
        </FormGroup>
    )
}

export default ListForm