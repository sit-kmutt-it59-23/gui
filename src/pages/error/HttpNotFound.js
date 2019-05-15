import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card as ReactstrapCard,
         Button,
         CardTitle,
         CardText } from 'reactstrap';

import FullScreenLayout from 'layouts/FullScreenLayout';


class HttpNotFound extends Component {
    render() {
        const Card = styled(ReactstrapCard)`
            max-width: 640px;
            flex: 0 1 auto;
        `

        const main = (
            <Card body inverse color="dark" className="m-4 w-100">
                <CardTitle><h1 className="h4">ไม่พบหน้าที่คุณร้องขอ</h1></CardTitle>
                <CardText>หน้าที่คุณกำลังมองหาอาจถูกลบ เปลี่ยนชื่อ หรือไม่สามารถเข้าถึงได้ชั่วคราว</CardText>
                <Link to="/" className="btn btn-light">กลับสู่หน้าหลัก</Link>
            </Card>
        );

        return <FullScreenLayout main={main} middlePosition />
    }
}

export default HttpNotFound;