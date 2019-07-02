import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, DatePicker, Col, Select, Button, InputNumber, Table, Row } from 'antd'
import moment from 'moment'
import 'moment/locale/th'

const FormItem = Form.Item
const { TextArea } = Input
const { RangePicker } = DatePicker
const { Option } = Select

class InferFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            columns: [
                {
                    title: 'PDCA',
                    dataIndex: 'pdca',
                    key: 'pdca',
                    align: 'center',
                },
                {
                    title: 'หัวข้อการดำเนินงาน',
                    dataIndex: 'topic',
                    key: 'topic',

                },
                {
                    title: 'วันที่เริ่มต้น',
                    dataIndex: 'start',
                    key: 'start',
                    align: 'center',
                },
                {
                    title: 'วันที่สิ้นสุด',
                    dataIndex: 'end',
                    key: 'end',
                    align: 'center',
                },
                {
                    title: 'ระยะเวลา',
                    dataIndex: 'time',
                    key: 'time',
                    align: 'center',
                },
                {
                    title: 'ผู้รับผิดชอบ',
                    dataIndex: 'person',
                    key: 'person',
                    align: 'center',
                },
                {
                    title: 'Action',
                    dataIndex: '',
                    key: 'x',
                    align: 'center',
                    fixed: 'right',
                    render: () =>
                        <Fragment>
                            <Link to="#">แก้ไข</Link>
                            <span> / </span>
                            <Link to="#">ลบ</Link>
                        </Fragment>
                }
            ],
            data: [
                {
                    pdca: 'P',
                    topic: 'จัดเตรียมงาน',
                    start: '2 มิถุนายน 2562',
                    end: '4 มิถุนายน 2562',
                    time: '3 วัน',
                    person: 'วรรณกานต์ สุวรรณดี',
                },
                {
                    pdca: 'D',
                    topic: 'จัดเตรียมงาน',
                    start: '2 มิถุนายน 2562',
                    end: '4 มิถุนายน 2562',
                    time: '3 วัน',
                    person: 'วรรณกานต์ สุวรรณดี',
                },
            ],
            error: null
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const textAreaLayout = {
            labelAlign: 'left',
            labelCol: {
                sm: { span: 20, offset: 2 },
                md: { span: 21, offset: 3 },
            },
            wrapperCol: {
                sm: { span: 20, offset: 2 },
                md: { span: 17, offset: 3 },
            }
        }

        const topicLayout = {
            labelAlign: 'left',
            labelCol: {
                sm: { span: 20, offset: 2 },
                md: { span: 21, offset: 3 },
            }
        }

        const rangeDateLayout = {
            labelAlign: 'left',
            labelCol: {
                sm: { span: 8, offset: 2 },
                md: { span: 7, offset: 2 },
            },
            wrapperCol: {
                sm: { span: 12, offset: 0 },
                md: { span: 13, offset: 0 },
            },
            colon: false
        }

        const selectLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 8 },
            },
        }

        const textFieldLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 8 },
            },
            wrapperCol: {
                sm: { span: 14 },
                md: { span: 13 },
            }
        }

        const dateLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 8 },
            },
            wrapperCol: {
                sm: { span: 14 },
                md: { span: 13 },
            }
        }

        const numberLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 9 },
            }
        }

        const longTextFieldLayout = {
            labelCol: {
                sm: { span: 12 },
                md: { span: 10 },
            },
            wrapperCol: {
                sm: { span: 10 },
                md: { span: 11 },
            }
        }

        return (
            <Form>
                <FormItem label="ลักษณะกิจกรรม(เขียนบรรยายรูปแบบการจัดการกิจกรรมพอสังเขป ให้เห็นภาพการจัดกิจกรรม)" {...textAreaLayout}>
                    {getFieldDecorator('rational_criterion_1')(<TextArea rows={5} />)}
                </FormItem>
                <FormItem label="ลักษณะกิจกรรมที่จัดขึ้นสอดคล้องกับหลักเกียรติและศักดิ์ของนักศึกษา(Code of Honor) ดังนี้(อธิบาย):" {...textAreaLayout}>
                    {getFieldDecorator('code_of_honor')(<TextArea rows={5} />)}
                </FormItem>
                <FormItem label="ระยะเวลาดำเนินงาน" {...topicLayout}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="ระยะเวลาเตรียมงาน" {...rangeDateLayout}>
                                {getFieldDecorator('preparation_period')(<RangePicker renderExtraFooter={() => 'extra footer'} />)}
                            </FormItem>
                            <FormItem label="ระยะเวลาปฏิบัติงาน" {...rangeDateLayout}>
                                {getFieldDecorator('working_period')(<RangePicker renderExtraFooter={() => 'extra footer'} />)}
                            </FormItem>
                        </div>
                    </Col>
                </FormItem>
                <FormItem label="ขั้นตอนการดำเนินงาน" {...topicLayout}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="ขั้นตอน" {...selectLayout}>
                                {getFieldDecorator('procedure')(
                                    <Select placeholder="เลือก" style={{ width: '100px' }} >
                                        <Option value="P">P</Option>
                                        <Option value="D">D</Option>
                                        <Option value="C">C</Option>
                                        <Option value="A">A</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem label="หัวข้อการดำเนินงาน" {...textFieldLayout}>
                                {getFieldDecorator('operation_topic')(<Input />)}
                            </FormItem>
                            <FormItem label="วันเริ่มต้น - วันสิ้นสุด" style={{ marginBottom: 13 }} {...dateLayout}>
                                <FormItem style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginBottom: 0 }} >
                                    {getFieldDecorator('start_date')(<DatePicker />)}
                                </FormItem>
                                <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                                <FormItem style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginBottom: 0 }} >
                                    {getFieldDecorator('end_date')(<DatePicker />)}
                                </FormItem>
                            </FormItem>
                            <FormItem label="ระยะเวลา" {...numberLayout}>
                                {getFieldDecorator('procedure_time')(<InputNumber />)}
                                <span style={{ marginLeft: 10 }}>วัน</span>
                            </FormItem>
                            <FormItem label="ผู้รับผิดชอบ" {...textFieldLayout}>
                                {getFieldDecorator('responsible_person')(<Input placeholder="เฉพาะรหัสนักศึกษา" />)}
                            </FormItem>
                            <FormItem className="text-right" wrapperCol={{ xs: 24, sm: 22, md: 20 }}>
                                {/* ทุกครั้งที่กดเพิ่มข้อมูลต้องเรียงตาม PDCA, วันที่, เวลา ตามลำดับนะ*/}
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070" }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </FormItem>
                <Row>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 1100 }}
                            dataSource={this.state.data}
                            columns={this.state.columns}
                            footer={() =>
                                <div className="text-right">
                                    <Button disabled>ดูกราฟ</Button>
                                </div>
                            }
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="สถานที่ปฏิบัติงาน" {...textFieldLayout}>
                                {getFieldDecorator('location')(<Input />)}
                            </FormItem>
                            <FormItem label="หน่วยงานที่จัด" {...textFieldLayout}>
                                {getFieldDecorator('นrganization')(<Input />)}
                            </FormItem>
                            <FormItem label="อาจารย์ที่ปรึกษาหน่วยงาน" {...textFieldLayout}>
                                {getFieldDecorator('advisors')(<Input />)}
                            </FormItem>
                            <FormItem label="นักศึกษาผู้รับผิดชอบโครงการ" {...longTextFieldLayout}>
                                {getFieldDecorator('responsible_student')(<Input placeholder="เฉพาะรหัสนักศึกษา" />)}
                            </FormItem>
                            <FormItem label="เบอร์โทรศัพท์นักศึกษาผู้รับผิดชอบ" {...longTextFieldLayout}>
                                {getFieldDecorator('tel_student')(<Input />)}
                            </FormItem>
                        </div>
                    </Col>
                </Row>
            </Form >

        )
    }
}

const WrappedInfer = Form.create({ name: 'project_proposal' })(InferFrom)

export default WrappedInfer