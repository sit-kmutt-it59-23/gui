import React, { Component } from 'react'
import { Steps, Table, Row, Col } from 'antd'

const { Step } = Steps;

const columns = [
    {
        title: 'วันที่',
        dataIndex: 'date',
        align:'center'
    },
    {
        title: 'เวลา',
        dataIndex: 'time',
        align:'center'
    },
    {
        title: 'เอกสารส่งออก',
        dataIndex: 'by',
        align:'center'
    },
    {
        title: 'ถึง',
        dataIndex: 'to',
        align:'center'
    },
    {
        title: 'สถานะโครงการ',
        dataIndex: 'status',
        align:'center'
    },
]

const data = [
    {
        key: '1',
        date: '17 มิ.ย. 2562',
        time: '21:00 น.',
        by: 'ชมรมนาฏยโขนละคร',
        to: 'อาจารย์ที่ปรึกษา',
        status: 'รอตรวจสอบ'
    },
    {
        key: '2',
        date: '17 มิ.ย. 2562',
        time: '10:00 น.',
        by: 'อาจารย์ที่ปรึกษา',
        to: 'ชมรมนาฏยโขนละคร',
        status: 'รอแก้ไข'
    },
    {
        key: '3',
        date: '17 มิ.ย. 2562',
        time: '18:00 น.',
        by: 'ชมรมนาฏยโขนละคร',
        to: 'อาจารย์ที่ปรึกษา',
        status: 'รอตรวจสอบ'
    },

]
class ContentTab extends Component {
    render() {
        return (
            <Row style={{ marginTop: 20 }}>
                <Col xs={{ span: 18, offset: 3 }} sm={{ span: 10, offset: 6 }} md={{ span: 7, offset: 1 }}>
                    <Steps direction="vertical" current={1} status="process">
                        <Step title="ชมรมนาฏยโขนละคร"
                            description={
                                <div id="tracking-tail">
                                    ส่งเเบบเสนอโครงการเเล้ว<br/>
                                    17/06/2562<br />
                                    18:00
                                </div>
                            }
                        />
                        <Step title="อาจารย์ที่ปรึกษา"
                            description={
                                <div id="tracking-tail">
                                    รอตรวจสอบ<br/>
                                    17/06/2562<br/>
                                    18:00
                                </div>
                            }
                        />
                        <Step title="องค์การนักศึกษา"
                            description={
                                <div id="tracking-tail">
                                    ส่งเเบบเสนอโครงการเเล้ว<br/>
                                    17/06/2562<br/>
                                    18:00
                                </div>
                            }
                        />
                        <Step title="สภานักศึกษา"
                            description={
                                <div id="tracking-tail">
                                    ส่งเเบบเสนอโครงการเเล้ว<br/>
                                    17/06/2562<br/>
                                    18:00
                                </div>
                            }
                        />
                        <Step title="กองกิจการนักศึกษา"
                            description={
                                <div className="text-left" id="tracking-tail">
                                    ส่งเเบบเสนอโครงการเเล้ว<br/>
                                    17/06/2562<br/>
                                    18:00
                                </div>
                            }
                        />
                    </Steps>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 23 , offset: 1 }} md={{ span: 15, offset: 0 }} >
                    <Table 
                        columns={ columns } 
                        dataSource={ data } 
                        scroll={{ x: 700 }}
                    />
                </Col>
            </Row>
        )
    }
}
export default ContentTab