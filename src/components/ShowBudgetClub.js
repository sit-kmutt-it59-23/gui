import React, { Component } from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const ListGroupItemCustom = styled(ListGroupItem)`
    font-size:12px;
    border:none

    &:frist-child{
        font-weight:bold;
    }
`

class ShowBudgetClub extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItemCustom color="dark" className="text-center" >งบประมาณปี 2562</ListGroupItemCustom>
                <ListGroupItemCustom color="secondary" className="clearfix">
                    <span className="float-left">ทั้งหมด</span>
                    <span className="float-right">200,000 บาท</span>
                </ListGroupItemCustom>
                <ListGroupItemCustom color="secondary" className="clearfix">
                    <span className="float-left">ใช้ไป</span>
                    <span className="float-right">50,000 บาท</span>
                </ListGroupItemCustom>
                <ListGroupItemCustom color="secondary" className="clearfix">
                    <span className="float-left">คงเหลือ</span>
                    <span className="float-right">150,000 บาท</span>
                </ListGroupItemCustom>
                
          </ListGroup>
        );
    }
}

export default ShowBudgetClub