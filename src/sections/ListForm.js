import React from 'react';
import { Row, FormGroup, Col } from 'reactstrap';
import styled from 'styled-components';

const InputCustom = styled.input`
    border-radius:10px;
    border-color:#707070;
    height:35px;
    display:inline;
`

const ListForm = (props) =>  {
    const {number,description,type,name} = props
    return (
        <FormGroup>
            <Row>
                <Col xs="12" sm="6" md="6" className="col-form-label">
                    {number ? `${number}. ` : '' }{description}
                </Col>
                <Col xs={{size:2,offset:2}} sm={{size:2,offset:0}} md={{size:2,offset:0}} className="col-form-label ">จำนวน</Col>
                <Col xs="3" sm="2" md="2">
                    <InputCustom className="form-control" min="0" name={name} type="number" />
                </Col>
                <Col xs="3" sm="1" md="1" className="col-form-label">{type}</Col>
            </Row>
        </FormGroup>
    )
}

export default ListForm