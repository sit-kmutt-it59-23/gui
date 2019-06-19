import React, { Component, Fragment } from 'react';
import { DatePicker, Form, Input, InputNumber } from 'antd'
import styled from 'styled-components';

const FormItem = Form.Item;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// const TextBold = styled.p`
//     font-weight : bold;
//     display: inline;
// `
// const InputCustom = styled.input`
//     border-radius:10px;
//     border-color:#707070;
//     height: 35px;
// `

class ProjectProposalForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
        };

        const subFormItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
        };

        return (
            <Fragment>
                <Form {...formItemLayout}>
                    <FormItem label="ชื่อโครงการ">
                        {getFieldDecorator('name', {})(<Input />)}
                    </FormItem>
                    <FormItem label="ชื่อโครงการ (ภาษาอังกฤษ)">
                        {getFieldDecorator('name_en', {})(<Input />)}
                    </FormItem>
                    <FormItem label="จำนวนชั่วโมงแบ่งตามประเภท">
                        <FormItem label="ด้านพัฒนาทักษะทางวิชาการและวิชาชีพ">
                            {getFieldDecorator('hours_amount-educational')(<InputNumber min={0} />)}
                            <span> ชั่วโมง</span>
                        </FormItem>
                        <FormItem label="ด้านกีฬาและการส่งเสริมสุขภาพ">
                            {getFieldDecorator('hours_amount-health')(<InputNumber min={0} />)}
                            <span> ชั่วโมง</span>
                        </FormItem>
                        <FormItem label="ด้านกิจกรรมจิตอาสาและบำเพ็ญประโยชน์">
                            {getFieldDecorator('hours_amount-community')(<InputNumber min={0} />)}
                            <span> ชั่วโมง</span>
                        </FormItem>
                        <FormItem label="ด้านทำนุบำรุงศิลปะและวัฒนธรรม">
                            {getFieldDecorator('hours_amount-arts')(<InputNumber min={0} />)}
                            <span> ชั่วโมง</span>
                        </FormItem>
                        <FormItem label="ด้านพัฒนาคุณลักษณะ">
                            {getFieldDecorator('hours_amount-characteristics')(<InputNumber min={0} />)}
                            <span> ชั่วโมง</span>
                        </FormItem>
                        <FormItem label="ด้านความภาคภูมิใจและความผูกพันมหาวิทยาลัย">
                            {getFieldDecorator('hours_amount-loyality')(<InputNumber min={0} />)}
                            <span> ชั่วโมง</span>
                        </FormItem>
                    </FormItem>
                    <FormItem label="KMUTT Student QF">
                        <FormItem label="ความรู้">
                            {getFieldDecorator('qf_amount-knowledge')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ทักษะเชิงวิชาชีพ">
                            {getFieldDecorator('qf_amount-profession')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ทักษะการคิด">
                            {getFieldDecorator('qf_amount-thinking')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ทักษะการเรียนรู้">
                            {getFieldDecorator('qf_amount-learning')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ทักษะการสื่อสาร">
                            {getFieldDecorator('qf_amount-communication')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ทักษะการจัดการ">
                            {getFieldDecorator('qf_amount-management')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ภาวะผู้นำ">
                            {getFieldDecorator('qf_amount-leadership')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                        <FormItem label="ความเป็นพลเมือง มจธ.">
                            {getFieldDecorator('qf_amount-kmutt-citizen')(<InputNumber min={0} max={100} />)}
                            <span> %</span>
                        </FormItem>
                    </FormItem>
                    <FormItem label="หลักการและเหตุผล">
                        {getFieldDecorator('rational_criterion')(<TextArea />)}
                    </FormItem>
                    <FormItem label="วัตถุประสงค์">
                        {getFieldDecorator('objective')(<TextArea />)}
                    </FormItem>
                    <FormItem label="ผู้เข้าร่วมโครงการ">
                        <FormItem label="นักศึกษา">
                            {getFieldDecorator('attendee_amount-student')(<InputNumber min={0} />)}
                            <span> คน</span>
                        </FormItem>
                        <FormItem label="อาจารย์">
                            {getFieldDecorator('attendee_amount-lecturer')(<InputNumber min={0} />)}
                            <span> คน</span>
                        </FormItem>
                        <FormItem label="เจ้าหน้าที่">
                            {getFieldDecorator('attendee_amount-personnel')(<InputNumber min={0} />)}
                            <span> คน</span>
                        </FormItem>
                        <FormItem label="บุคคลในชุมชน/นักเรียน">
                            {getFieldDecorator('attendee_amount-outsider')(<InputNumber min={0} />)}
                            <span> คน</span>
                        </FormItem>
                    </FormItem>
                    <FormItem label="ลักษณะกิจกรรม">
                        {getFieldDecorator('activity_characteristics')(<TextArea />)}
                    </FormItem>
                    <FormItem label="ความสอดคล้องของเกียรติและศักดิ์ของนักศึกษา">
                        {getFieldDecorator('coh_accordance')(<TextArea />)}
                    </FormItem>
                    <FormItem label="ระยะเวลาดำเนินงาน">
                        {getFieldDecorator('activity_duration')(<RangePicker />)}
                    </FormItem>
                </Form>
                {/* <Form className="mt-3 mb-3">

                    <TextBold className="mb-4">ระยะเวลาการดำเนินงาน:</TextBold>
                    <FormGroup>
                        <Row className="mt-1">
                            <Col xs={{size:12}} className="col-form-label">ระยะเวลาเตรียมงาน </Col>
                            <Col xs={{size:4,offset:1}} md={{size:5}} lg={{size:3}}><InputCustom className="form-control" name="" type="date" /></Col>
                            <Col xs="2" md="1" className="col-form-label text-center">ถึง</Col>
                            <Col xs="4" md="5" lg="3"><InputCustom className="form-control" name="" type="date" /></Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={{size:12}} className="col-form-label">ระยะเวลาปฏิบัติงาน </Col>
                            <Col xs={{size:4,offset:1}} md={{size:5}} lg={{size:3}}><InputCustom className="form-control" name="" type="date" /></Col>
                            <Col xs="2" md="1" className="col-form-label text-center">ถึง</Col>
                            <Col xs="4" md="5" lg="3"><InputCustom className="form-control" name="" type="date" /></Col>
                        </Row>
                    </FormGroup>

                    <TextBold>ขั้นตอนการดำเนินงาน:</TextBold>
                    -----------------------เว้นให้เอ------------------------

                    <FormGroup>
                        <Row>
                            <Col xs="12" sm="12" md="4" className="col-form-label">
                                <TextBold>สถานที่ปฏิบัติงาน: </TextBold>
                            </Col>
                            <Col xs={{offset:1,size:10}} sm={{size:8}} md={{size:6}}>
                                <InputCustom className="form-control" name="" type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs="12" sm="12" md="4" className="col-form-label">
                                <TextBold>หน่วยงานที่จัด: </TextBold>
                            </Col>
                            <Col xs={{offset:1,size:10}} sm={{size:8}} md={{size:6}}>
                                <InputCustom className="form-control" name="" type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs="12" sm="12" md="4" className="col-form-label">
                                <TextBold>อาจารย์ที่ปรึกษาหน่วยงาน: </TextBold>
                            </Col>
                            <Col xs={{offset:1,size:10}} sm={{size:8}} md={{size:6}}>
                                <InputCustom className="form-control" name="" type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs="12" sm="12" md="4" className="col-form-label">
                                <TextBold>นักศึกษาผู้รับผิดชอบโครงการ: </TextBold>
                            </Col>
                            <Col xs={{offset:1,size:10}} sm={{size:8}} md={{size:6}}>
                                <InputCustom className="form-control" name="" type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col  xs="12" sm="12" md="4" className="col-form-label">
                                <TextBold>เบอร์โทรศัพท์มือถือนักศึกษาผู้รับผิดชอบโครงการ: </TextBold>
                            </Col>
                            <Col xs={{offset:1,size:10}} sm={{size:8}} md={{size:6}}>
                                <InputCustom className="form-control" name="" type="text" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <TextBold className="mb-4">คณะกรรมการจัดโครงการ:</TextBold>
                    -----------------------เว้นให้เอ------------------------

                    <TextBold>รูปแบบการประเมินผล:</TextBold>
                    <FormGroup className="mt-2 mb-2">
                        <Row>
                            <Col xs={{offset:2}} md={{ size: 10, offset: 1 }}>
                                <Label check>
                                    <Input type="checkbox" id="checkbox1" />การสังเกต (Observatation)
                                </Label>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={{offset:2}} md={{ size: 10, offset: 1 }}>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" name=""/>การสัมภาษณ์ (Interview)
                                </Label>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={{offset:2}} md={{ size: 10, offset: 1 }}>
                                <Label check>
                                    <Input type="checkbox" id="checkbox3" name="" />การใช้แบบสอบถาม (Questoinaires)
                                </Label>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={{offset:2}} md={{ size: 10, offset: 1 }} >
                                <Label check>
                                    <Input type="checkbox" id="checkbox4" name="" />การใช้แบบสอบถาม (Test)
                                </Label>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={{offset:2}} md={{ size: 11, offset: 1 }} >
                                <Label check>
                                    <Input type="checkbox" id="checkbox5" name="" />
                                    อื่นๆ โปรดระบุ
                                </Label>
                            </Col>
                            <Col xs={{offset:2,size:8}} md={{offset:1, size: 5 }} className="mb-3 mt-1">
                                <InputCustom className="form-control" name=""/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <TextBold>ผลที่คาดว่าจะได้รับ </TextBold>
                    <span>(การกำหนดผลที่คาดว่าจะได้รับหลังจากการดำเนินกิจกรรมจะต้องสอดคล้องกับวัตถุประสงค์ของโครงการและต้องมีการกำหนดตัวชี้วัดด้วย):</span>
                    -----------------------เว้นให้เอ------ลบ div ข้างล่างให้ด้วย------------------
                    <div></div>

                    
                    <TextBold >รายละเอียดงบประมาณ: </TextBold>
                    <ListForm description="โครงการนี้มีการใช้งบประมาณโดยรวมทั้งหมด" type="บาท" name=""/>
                    <span>(เฉพาะเงิน) จำแนกได้ดังนี้ </span>
                    <TextBold>
                        <ListForm number="1" description="งบประมาณที่ได้รับสนับสนุนจากแหล่งทุนภายนอก" type="บาท" name="" />
                    </TextBold>
                    -----------------------เว้นให้เอ------------------------
                    <TextBold>
                        <ListForm number="2" description="งบประมาณที่ขอรับการสนับสนุนจากมหาวิทยาลัย" type="บาท" name="" />
                    </TextBold>
                    -----------------------เว้นให้เอ------------------------

                    <Row>
                        <Col xs="12" sm={{size:3,offset:9}} md={{size:3,offset:9}} className="text-center">
                            <Button color="success">ส่งแบบฟอร์ม</Button>
                        </Col>
                    </Row>
                </Form> */}
            </Fragment>
        )
    }
}

const WrappedProjectProposalForm = Form.create({ name: 'project_proposal' })(ProjectProposalForm)

export default WrappedProjectProposalForm