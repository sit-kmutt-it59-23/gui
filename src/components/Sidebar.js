import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: #000000;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const StyledListGroup  = styled(ListGroup)`
    font-size : 12px;
    background-color:#d6d8db;
    border-radius:20px;

`
const StyledListGroupItemTopic = styled(ListGroupItem)`
    border:none;

    &:last-child{
        border:none;
        border-top-right-radius:0px;
        border-top-left-radius:0px;  
    }
`
const StyledListGroupItem = styled(ListGroupItem)`
    border:none;
        
    &:last-child{
        border:none;
        border-top-right-radius:0px;
        border-top-left-radius:0px;  
    }

`

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.offer = this.offer.bind(this);
        this.infer = this.infer.bind(this);

        this.state = {
            listOffer: false,
            infer: false
        }
    }

    offer() {
        this.setState({
            listOffer: !this.state.listOffer
        })
    }

    infer() {
        this.setState({
            listInfer: !this.state.listInfer
        })
    }
    render() {
        return (
            <StyledListGroup>
                <StyledListGroupItemTopic onClick={this.offer} action className="list-group-item-dark">
                    <span className="float-left">เสนอโครงการ</span>
                    <i className="fas fa-sort-down float-right"></i>
                </StyledListGroupItemTopic>
                <Collapse  isOpen={this.state.listOffer}>
                    <StyledLink to="/projects"><StyledListGroupItem color="secondary" action>โครงการที่ผ่านการพิจารณางบ</StyledListGroupItem></StyledLink>
                    <StyledLink to="/selectProject"><StyledListGroupItem color="secondary" action>กรอกแบบฟอร์มโครงการ</StyledListGroupItem></StyledLink>
                    <StyledLink to="#"><StyledListGroupItem color="secondary" action>ติดตามโครงการ</StyledListGroupItem></StyledLink>
                    <StyledLink to="#"><StyledListGroupItem color="secondary" action>แบบเสนอโครงการที่อนุมัติ</StyledListGroupItem></StyledLink>
                </Collapse>

                <StyledListGroupItemTopic onClick={this.infer} action className="list-group-item-dark" >
                    <span className="float-left">สรุปโครงการ</span>
                    <i className="fas fa-sort-down float-right"></i>
                </StyledListGroupItemTopic>
                <Collapse isOpen={this.state.listInfer}>
                    <StyledLink to="#"><StyledListGroupItem color="secondary" action>โครงการที่รอสรุปผล</StyledListGroupItem></StyledLink>
                    <StyledLink to="#"><StyledListGroupItem color="secondary" action>โครงการที่กำลังสรุปผล</StyledListGroupItem></StyledLink>
                    <StyledLink to="#"><StyledListGroupItem color="secondary" action>โครงการที่สรุปผลแล้ว</StyledListGroupItem></StyledLink>
                </Collapse>

                <StyledLink to="#"><StyledListGroupItemTopic action color="dark">ข้อมูลชมรม</StyledListGroupItemTopic></StyledLink>
            </StyledListGroup>
        )
    }
}

export default Sidebar