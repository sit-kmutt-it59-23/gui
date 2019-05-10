import React, {Component} from 'react';
import {
    ListGroup,
    ListGroupItem,
    } from 'reactstrap';

export default class Sidebar extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem disabled tag="a" href="#">เสนอโครงการ</ListGroupItem>
                <ListGroupItem tag="a" href="#">โครงการที่ผ่านการพิจารณางบ</ListGroupItem>
                <ListGroupItem tag="a" href="#">กรอกแบบฟอร์มโครงการ</ListGroupItem>
                <ListGroupItem tag="a" href="#">ติดตามโครงการ</ListGroupItem>
                <ListGroupItem tag="a" href="#">แบบเสนอโครงการที่อนุมัติ</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">สรุปโครงการ</ListGroupItem>
                <ListGroupItem tag="a" href="#">โครงการที่รอสรุปผล</ListGroupItem>
                <ListGroupItem tag="a" href="#">โครงการที่กำลังสรุปผล</ListGroupItem>
                <ListGroupItem tag="a" href="#">โครงการที่สรุปผลแล้ว</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">ข้อมูลชมรม</ListGroupItem>
            </ListGroup>
        );
    } 
}