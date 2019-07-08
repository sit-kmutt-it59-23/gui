import React, { Component, Fragment } from 'react'
import { Form, Col, Row, Button, Input, Checkbox, 
        Table, Select, InputNumber, Upload, Icon, TimePicker, DatePicker, message  } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/th'


const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group
const { Option } = Select
const { Dragger } = Upload

const selectAfter = (
    <Select defaultValue="หน่วย" >
        <Option value="หน่วย">หน่วย</Option>
        <Option value="คน">คน</Option>
        <Option value="ชิ้น">ชิ้น</Option>
        <Option value="แผ่น">แผ่น</Option>
        <Option value="ถุง">ถุง</Option>
    </Select>
)

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  }

class InferFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            columnMember: [
                {
                    title: 'รหัสนักศึกษา',
                    dataIndex: 'studentId',
                    key: 'studentId',
                },
                {
                    title: 'ชื่อ-นามสกุล',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'ตำแหน่ง',
                    dataIndex: 'role',
                    key: 'role',
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
            dataMember: [
                {
                    studentId: '59130500033',
                    name: 'นางสาวพิมพ์ชนก ทิพย์ชมพู',
                    role: 'รองประธานโครงการ'
                },
                {
                    studentId: '59130500032',
                    name: 'นางสาวกนกพร กระจ่างฟ้า',
                    role: 'เหรัญญิก'
                },
            ],
            error: null
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form

        const textFieldLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 7 },
            },
            wrapperCol: {
                sm: { span: 15 },
                md: { span: 13 },
            }
        }

        const textFieldLayout2 = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 4 },
            },
            wrapperCol: {
                sm: { span: 15 },
                md: { span: 13 },
            }
        }

        const CheckLayout = {
            wrapperCol: {
                offset: 1
            }
        }

        const selectLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 7 },
            },
        }

        const selectLayout2 = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 4 },
            },
        }

        const numberLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 7 },
            }
        }

        const numberLayout2 = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 4 },
            }
        }

        const priceLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 4 },
            },
            wrapperCol: {
                sm: { span: 8 },
                md: { span: 20 },
            }
        }

        const timeLayout = {
            labelCol: {
                sm: { span: 8 },
                md: { span: 7 },
            },
            wrapperCol: {
                sm: { span: 8 },
                md: { span: 10 },
            }
        }


        return (
            <Form>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        <strong>รูปแบบการประเมินผล:</strong>
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form" >
                            <FormItem {...CheckLayout}>
                                {getFieldDecorator('checkbox-evaluation')(
                                    <CheckboxGroup>
                                        <Row>
                                            <Col span={24} style={{ marginBottom: 10 }}>
                                                <Checkbox value="Observatation">การสังเกต (Observatation)</Checkbox>
                                            </Col>
                                            <Col span={24} style={{ marginBottom: 10 }}>
                                                <Checkbox value="Interview">การสัมภาษณ์ (Interview)</Checkbox>
                                            </Col>
                                            <Col span={24} style={{ marginBottom: 10 }}>
                                                <Checkbox value="Questoinaires">การใช้แบบสอบถาม (Questoinaires)</Checkbox>
                                            </Col>
                                            <Col span={24} style={{ marginBottom: 10 }}>
                                                <Checkbox value="Test">การใช้แบบสอบถาม (Test)</Checkbox>
                                            </Col>
                                            <Col span={24}>
                                                <Checkbox value="etc" style={{ display: 'inline-flex' }} >
                                                    อื่นๆ โปรดระบุ
                                                {getFieldDecorator('etc_data')(<Input />)}
                                                </Checkbox>
                                            </Col>
                                        </Row>
                                    </CheckboxGroup>,
                                )}
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }}>
                        <strong>ผลที่คาดว่าจะได้รับ</strong>
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        (การกำหนดผลที่คาดว่าจะได้รับหลังจากการดำเนินกิจกรรมจะต้องสอดคล้องกับวัตถุประสงค์ของโครงการ และต้องมีการกำหนดตัวชี้วัดด้วย)
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="ผลที่คาดว่าจะได้รับ" {...textFieldLayout}>
                                {getFieldDecorator('expected_results')(<Input />)}
                            </FormItem>
                            <FormItem label="ตัวชี้วัด KPI" {...textFieldLayout}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem label="ค่าเป้าหมาย" {...textFieldLayout}>
                                {getFieldDecorator('target_value')(<Input />)}
                            </FormItem>
                            <FormItem className="text-right" wrapperCol={{ xs: 24, sm: 23, md: 20 }}>
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070", marginTop: 0 }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        <strong>ผลการดำเนินงานที่ผ่านมาและการนำผลการประเมินโครงการ/กิจกรรมมาปรับปรุงในการจัดโครงการครั้งนี้ (กรณีเป็นโครงการต่อเนื่อง)</strong>
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="ปัญหา/อุปสรรค:" {...textFieldLayout}>
                                {getFieldDecorator('expected_results')(<Input />)}
                            </FormItem>
                            <FormItem label="แนวทางการแก้ไข:" {...textFieldLayout}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem className="text-right" wrapperCol={{ xs: 24, sm: 23, md: 20 }}>
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070", marginTop: 0 }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }}>
                        <strong>รายละเอียดงบประมาณ:</strong>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        <strong>1. งบประมาณที่ได้รับการสนับสนุนจากแหล่งทุนภายนอก (ถ้ามี)</strong>
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="ได้รับงบประมาณจาก" {...textFieldLayout}>
                                {getFieldDecorator('expected_results')(<Input />)}
                            </FormItem>
                            <FormItem label="หมวด" {...selectLayout}>
                                {getFieldDecorator('procedure')(
                                    <Select placeholder="เลือก" style={{ width: '200px' }} >
                                        <Option value="ค่าวัสดุ">ค่าวัสดุ</Option>
                                        <Option value="ค่าใช้สอย">ค่าใช้สอย</Option>
                                        <Option value="ค่าตอบแทน">ค่าตอบแทน</Option>
                                        <Option value="ค่ายานพาหนะ">ค่ายานพาหนะ</Option>
                                        <Option value="ค่าเชื้อเพลิง">ค่าเชื้อเพลิง</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem label="รายละเอียด:" {...textFieldLayout}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem label="เป็นเงิน" {...numberLayout}>
                                {getFieldDecorator('procedure_time')(<InputNumber />)}
                                <span style={{ marginLeft: 10 }}>บาท</span>
                            </FormItem>
                            <FormItem wrapperCol={{
                                xs: 24,
                                sm: 23,
                                md: { span: 10, offset: 7 }
                            }}>
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070", marginTop: 0 }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        กรณี การขอรับการสนับสนุนเป็นทรัพยากร สินค้า หรือผลิตภัณฑ์:
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="ได้รับผลิตภัณฑ์จาก" {...textFieldLayout}>
                                {getFieldDecorator('expected_results')(<Input />)}
                            </FormItem>
                            <FormItem label="ชื่อผลิตภัณฑ์" {...textFieldLayout}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem label="มูลค่า" {...numberLayout}>
                                {getFieldDecorator('procedure_time')(<InputNumber />)}
                                <span style={{ marginLeft: 10 }}>บาท</span>
                            </FormItem>
                            <FormItem wrapperCol={{
                                xs: 24,
                                sm: 23,
                                md: { span: 18, offset: 7 }
                            }}>
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070", marginTop: 0 }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        <strong>2. งบประมาณที่ขอรับการสนับสนุนจากมหาวิทยาลัย</strong>
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        งบประมาณที่ขอรับการสนับสนุนผ่านองค์การบริหารนักศึกษา:
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="หมวด" {...selectLayout2}>
                                {getFieldDecorator('procedure')(
                                    <Select placeholder="เลือก" style={{ width: '300px' }} >
                                        <Option value="ค่าวัสดุ">ค่าวัสดุ</Option>
                                        <Option value="ค่าใช้สอย">ค่าใช้สอย</Option>
                                        <Option value="ค่าตอบแทน">ค่าตอบแทน</Option>
                                        <Option value="ค่ายานพาหนะ">ค่ายานพาหนะ</Option>
                                        <Option value="ค่าเชื้อเพลิง">ค่าเชื้อเพลิง</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem label="ชื่อผลิตภัณฑ์" {...textFieldLayout2}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem label="ราคาต่อหน่วย"
                                help="ตัวอย่าง (ราคาหน่วยละ 20 บาท X จำนวน 10 คน X 3 มื้อ)"
                                {...priceLayout}
                            >
                                <Row gutter={8}>
                                    <Col span={6}>
                                        {getFieldDecorator('kpi')(<Input addonAfter="บาท" />)}
                                    </Col>
                                    <Col span={8}>
                                        {getFieldDecorator('kpi')(<Input addonBefore="จำนวน" addonAfter={selectAfter} />)}

                                    </Col>
                                    <Col span={8}>
                                        {getFieldDecorator('kpi')(<Input addonBefore="จำนวน" addonAfter="บาท" />)}
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="เป็นเงิน" {...numberLayout2}>
                                {getFieldDecorator('procedure_time')(<InputNumber />)}
                                <span style={{ marginLeft: 10 }}>บาท</span>
                            </FormItem>
                            <FormItem wrapperCol={{
                                xs: 24,
                                sm: 23,
                                md: { span: 20, offset: 4 }
                            }}>
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070", marginTop: 0 }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        งบประมาณที่ขอรับการสนับสนุนผ่านคณะ/หน่วยงาน:
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="หมวด" {...selectLayout2}>
                                {getFieldDecorator('procedure')(
                                    <Select placeholder="เลือก" style={{ width: '300px' }} >
                                        <Option value="ค่าวัสดุ">ค่าวัสดุ</Option>
                                        <Option value="ค่าใช้สอย">ค่าใช้สอย</Option>
                                        <Option value="ค่าตอบแทน">ค่าตอบแทน</Option>
                                        <Option value="ค่ายานพาหนะ">ค่ายานพาหนะ</Option>
                                        <Option value="ค่าเชื้อเพลิง">ค่าเชื้อเพลิง</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem label="รายละเอียด:" {...textFieldLayout2}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem label="ราคาต่อหน่วย"
                                help="ตัวอย่าง (ราคาหน่วยละ 20 บาท X จำนวน 10 คน X 3 มื้อ)"
                                {...priceLayout}
                            >
                                <Row gutter={8}>
                                    <Col span={6}>
                                        {getFieldDecorator('kpi')(<Input addonAfter="บาท" />)}
                                    </Col>
                                    <Col span={8}>
                                        {getFieldDecorator('kpi')(<Input addonBefore="จำนวน" addonAfter={selectAfter} />)}

                                    </Col>
                                    <Col span={8}>
                                        {getFieldDecorator('kpi')(<Input addonBefore="จำนวน" addonAfter="บาท" />)}
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="เป็นเงิน" {...numberLayout2}>
                                {getFieldDecorator('procedure_time')(<InputNumber />)}
                                <span style={{ marginLeft: 10 }}>บาท</span>
                            </FormItem>
                            <FormItem wrapperCol={{
                                xs: 24,
                                sm: 23,
                                md: { span: 20, offset: 4 }
                            }}>
                                <Button type="primary" style={{ backgroundColor: "#216185", borderColor: "#707070", marginTop: 0 }}>เพิ่มข้อมูล</Button>
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 5 }}>
                        <strong>กำหนดการ:</strong>
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <div className="border-form">
                            <FormItem label="วันที่" {...timeLayout}>
                                {getFieldDecorator('kpi')(<DatePicker format="ll" />)}
                            </FormItem>
                            <FormItem label="เวลาเริ่ม - เวลาสิ้นสุด" {...timeLayout}>
                                {getFieldDecorator('kpi')(<TimePicker format="HH:mm" style={{ marginRight: 10 }} />)}
                                {getFieldDecorator('kpi')(<TimePicker format="HH:mm" />)}
                            </FormItem>
                            <FormItem label="กิจกรรม" {...textFieldLayout}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                            <FormItem label="วัตถุประสงค์" {...textFieldLayout}>
                                {getFieldDecorator('kpi')(<Input />)}
                            </FormItem>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }} >
                        <Table
                            className="form-table"
                            size="small"
                            scroll={{ x: 700 }}
                            dataSource={this.state.dataWorking}
                            columns={this.state.columnWorking}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: 24 }}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ offset: 3, span: 17 }} style={{ marginBottom: 20 }}>
                        <strong>เอกสารเพิ่มเติม</strong> (เช่น ประวัติวิทยากร, แผนการเรียนการสอน หรือ อื่น ๆ) ถ้ามี:
                    </Col>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 13, offset: 5 }} >
                        <FormItem>
                            {getFieldDecorator('dragger')(
                                <Dragger {...props}> 
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">คลิก หรือ ลากไฟล์มาวางที่นี่</p>
                                    <p className="ant-upload-hint">Click or drag file to this area to upload</p>
                                </Dragger>,
                            )}
                        </FormItem>
                    </Col>
                </Row>
            </Form >

        )
    }
}

const WrappedInfer = Form.create({ name: 'project_proposal' })(InferFrom)

export default WrappedInfer