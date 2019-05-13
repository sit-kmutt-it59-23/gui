import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem disabled>เสนอโครงการ</ListGroupItem>
                <Link to="/projects"><ListGroupItem>โครงการที่ผ่านการพิจารณางบ</ListGroupItem></Link>
                <Link to="#"><ListGroupItem>กรอกแบบฟอร์มโครงการ</ListGroupItem></Link>
                <Link to="#"><ListGroupItem>ติดตามโครงการ</ListGroupItem></Link>
                <Link to="#"><ListGroupItem>แบบเสนอโครงการที่อนุมัติ</ListGroupItem></Link>

                <ListGroupItem disabled>สรุปโครงการ</ListGroupItem>
                <Link to="#"><ListGroupItem>โครงการที่รอสรุปผล</ListGroupItem></Link>
                <Link to="#"><ListGroupItem>โครงการที่กำลังสรุปผล</ListGroupItem></Link>
                <Link to="#"><ListGroupItem>โครงการที่สรุปผลแล้ว</ListGroupItem></Link>

                <ListGroupItem disabled>ข้อมูลชมรม</ListGroupItem>
            </ListGroup>
        );
    } 
}