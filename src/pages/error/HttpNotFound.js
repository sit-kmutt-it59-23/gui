import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

import FullScreenLayout from 'layouts/FullScreenLayout'

class HttpNotFound extends Component {
    render() {
        const main = (
            <Card title="ขออภัย ไม่พบหน้าที่คุณร้องขอ" style={{ width: 500}}>
                <p>หน้าที่คุณกำลังมองหาอาจถูกลบ เปลี่ยนชื่อ หรือไม่สามารถเข้าถึงได้ชั่วคราว</p>
                <Link to="/" className="btn btn-light">กลับสู่หน้าหลัก</Link>
            </Card>
        )

        return <FullScreenLayout main={main} />
    }
}

export default HttpNotFound;