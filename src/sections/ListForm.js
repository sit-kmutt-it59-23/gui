import React from 'react';
import { Row, FormGroup, Col } from 'reactstrap';
import styled from 'styled-components';

const InputCustom = styled.input`
    border-radius:10px;
    border-color:#707070;
    height:35px;
`

const ListForm = (props) =>  {
    const {number,description,type,area} = props
    return (
        <FormGroup>
            <Row >
                <Col md={area} className="col-form-label">
                    {number ? `${number}. ` : '' }{description}
                </Col>
                <Col md="2" className="col-form-label text-center">จำนวน</Col>
                <Col md="2"><InputCustom className="form-control" min="0" type="number" /></Col>
                <Col md="1" className="col-form-label text-left">{type}</Col>
            </Row>
        </FormGroup>
    )
}

export default ListForm