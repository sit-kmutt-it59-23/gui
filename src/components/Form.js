import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Form, FormGroup, Label, Input,Button} from 'reactstrap';

import ListForm from '../sections/ListForm'
import TextArea from '../sections/TextArea'

const TextBold = styled.p`
    font-weight : bold;
    display: inline;
`
const InputCustom = styled.input`
    border-radius:10px;
    border-color:#707070;
    height: 35px;
`

class FormCustom extends Component {
    render() {
        return (
            <Form className="mt-3 mb-3">
                <FormGroup>
                    <Row>
                        <Col md="2" className="col-form-label">
                            <TextBold>ชื่อโครงการ: </TextBold>
                        </Col>
                        <InputCustom className="form-control col-md-8" name="" type="text" />
                    </Row>
                </FormGroup>
                <TextBold>ประเภทโครงการกิจกรรม ได้ดังนี้:</TextBold>
                <ListForm number="1" description="ด้านพัฒนาทักษะทางวิชาการและวิชาชีพ" type="ชั่วโมง" area="6" />
                <ListForm number="2" description="ด้านกีฬาและการส่งเสริมสุขภาพ" type="ชั่วโมง" area="6"/>
                <ListForm number="3" description="ด้านกิจกรรมจิตอาสาและบำเพ็ญประโยชน์" type="ชั่วโมง" area="6" />
                <ListForm number="4" description="ด้านทำนุบำรุงศิลปะและวัฒนธรรม" type="ชั่วโมง" area="6"/>
                <ListForm number="5" description="ด้านพัฒนาคุณลักษณะ" type="ชั่วโมง" area="6"/>
                <ListForm number="6" description="ด้านความภาคภูมิใจและความผูกพันมหาวิทยาลัย" type="ชั่วโมง" area="6"/>

                <TextBold className="mb-4">
                    การเทียบค่ากิจกรรมตามคุณลักษณะที่พึงประสงค์ของมหาวิทยาลัย
                    เทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT Student QF):
                </TextBold>
                <ListForm number="1" description="ความรู้ (Knowledge)" type="%" area="6"/>
                <ListForm number="2" description="ทักษะเชิงวิชาชีพ (Professional Skill)" type="%" area="6"/>
                <ListForm number="3" description="ทักษะการคิด (Thinking Skill)" type="%" area="6"/>
                <ListForm number="4" description="ทักษะการเรียนรู้ (Learning Skill)" type="%" area="6"/>
                <ListForm number="5" description="ทักษะการสื่อสาร (Communication Skill" type="%" area="6"/>
                <ListForm number="6" description="ทักษะการจัดการ (Management Skill)" type="%" area="6"/>
                <ListForm number="7" description="ภาวะผู้นำ (Leadership)" type="%" area="6" />
                <ListForm number="8" description="ความเป็นพลเมือง มจธ. (KMUTT’s citizenship)" type="%" area="6" />

                <TextArea header="หลักการและเหตุผล" description="เขียนไม่น้อยกว่าครึ่งกระดาษ A4" />

                <TextBold className="mb-4">วัตถุประสงค์ </TextBold>
                <span>(ไม่เกิน 3 ข้อ)</span>
                <TextBold> : </TextBold>
                <FormGroup>
                    <Row className="mt-3">
                        <Col md="1" className="text-right col-form-label">1. </Col>
                        <Col md="10"><InputCustom className="form-control" name="" type="text" /></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col md="1" className="text-right col-form-label">2. </Col>
                        <Col md="10"><InputCustom className="form-control" name="" type="text" /></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col md="1" className="text-right col-form-label">3. </Col>
                        <Col md="10"><InputCustom className="form-control" name="" type="text" /></Col>
                    </Row>
                </FormGroup>

                <TextBold className="mb-4">ผู้เข้าร่วมโครงการ:</TextBold>
                <ListForm number="1" description="นักศึกษา" type="คน" area="4" />
                <ListForm number="2" description="อาจารย์" type="คน" area="4" />
                <ListForm number="3" description="เจ้าหน้าที่" type="คน" area="4" />
                <ListForm number="4" description="บุคคลในชุมชน/นักเรียน" type="คน" area="4" />

                <TextArea header="ลักษณะกิจกรรม" description="เขียนบรรยายรูปแบบการจัดกิจกรรมพอสังเขป ให้เห็นภาพการจัดกิจกรรม" />
                <TextArea header="ลักษณะกิจกรรมที่จัดขึ้นสอดคล้องกับหลักเกียรติและศักดิ์ของนักศึกษา(Code of Honor) ดังนี้"
                    description="จงอธิบาย" />

                <TextBold className="mb-4">ระยะเวลาการดำเนินงาน:</TextBold>
                <FormGroup>
                    <Row className="mt-1">
                        <Col md="3" className="col-form-label">ระยะเวลาเตรียมงาน </Col>
                        <Col md="4"><InputCustom className="form-control" name="" type="date" /></Col>
                        <Col md="1" className="col-form-label text-center">ถึง</Col>
                        <Col md="4"><InputCustom className="form-control" name="" type="date" /></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col md="3" className="col-form-label">ระยะเวลาปฏิบัติงาน </Col>
                        <Col md="4"><InputCustom className="form-control" name="" type="date" /></Col>
                        <Col md="1" className="col-form-label text-center">ถึง</Col>
                        <Col md="4"><InputCustom className="form-control" name="" type="date" /></Col>
                    </Row>
                </FormGroup>

                <TextBold className="mb-4">ขั้นตอนการดำเนินงาน:</TextBold>
                {/* -----------------------เว้นให้เอ------------------------ */}

                <FormGroup>
                    <Row>
                        <Col md="5" className="col-form-label">
                            <TextBold>สถานที่ปฏิบัติงาน: </TextBold>
                        </Col>
                        <InputCustom className="form-control col-md-6" name="" type="text" />
                    </Row>
                    <Row className="mt-1">
                        <Col md="5" className="col-form-label">
                            <TextBold>หน่วยงานที่จัด: </TextBold>
                        </Col>
                        <InputCustom className="form-control col-md-6" name="" type="text" />
                    </Row>
                    <Row className="mt-1">
                        <Col md="5" className="col-form-label">
                            <TextBold>อาจารย์ที่ปรึกษาหน่วยงาน: </TextBold>
                        </Col>
                        <InputCustom className="form-control col-md-6" name="" type="text" />
                    </Row>
                    <Row className="mt-1">
                        <Col md="5" className="col-form-label">
                            <TextBold>นักศึกษาผู้รับผิดชอบโครงการ: </TextBold>
                        </Col>
                        <InputCustom className="form-control col-md-6" name="" type="text" />
                    </Row>
                    <Row className="mt-1">
                        <Col md="7" className="col-form-label">
                            <TextBold>เบอร์โทรศัพท์มือถือนักศึกษาผู้รับผิดชอบโครงการ: </TextBold>
                        </Col>
                        <InputCustom className="form-control col-md-4" name="" type="text" />
                    </Row>
                </FormGroup>

                <TextBold className="mb-4">คณะกรรมการจัดโครงการ:</TextBold>
                {/* -----------------------เว้นให้เอ------------------------ */}

                <TextBold>รูปแบบการประเมินผล:</TextBold>
                <FormGroup className="mt-2 mb-2">
                    <Row>
                        <Col md={{ size: 10, offset: 1 }}>
                            <Label check>
                                <Input type="checkbox" id="checkbox1" />การสังเกต (Observatation)
                            </Label>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={{ size: 10, offset: 1 }}>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />การสัมภาษณ์ (Interview)
                            </Label>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={{ size: 10, offset: 1 }}>
                            <Label check>
                                <Input type="checkbox" id="checkbox3" />การใช้แบบสอบถาม (Questoinaires)
                            </Label>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={{ size: 10, offset: 1 }} >
                            <Label check>
                                <Input type="checkbox" id="checkbox4" />การใช้แบบสอบถาม (Test)
                            </Label>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={{ size: 2, offset: 1 }} >
                            <Label check>
                                <Input type="checkbox" id="checkbox5" />
                                อื่นๆ โปรดระบุ
                            </Label>
                        </Col>
                        <Col md={{ size: 5 }}>
                            <InputCustom className="form-control" />
                        </Col>
                    </Row>
                </FormGroup>

                <TextBold className="mb-4">ผลที่คาดว่าจะได้รับ </TextBold>
                <span>(การกำหนดผลที่คาดว่าจะได้รับหลังจากการดำเนินกิจกรรมจะต้องสอดคล้องกับวัตถุประสงค์ของโครงการและต้องมีการกำหนดตัวชี้วัดด้วย)</span>
                <TextBold> : </TextBold>
                {/* -----------------------เว้นให้เอ------ลบ div ข้างล่างให้ด้วย------------------ */}
                <div></div>

                
                <TextBold className="mb-4">รายละเอียดงบประมาณ: </TextBold>
                <ListForm description="โครงการนี้มีการใช้งบประมาณโดยรวมทั้งหมด" type="บาท" />
                <span>(เฉพาะเงิน) จำแนกได้ดังนี้ </span>
                <TextBold>
                    <ListForm number="1" description="งบประมาณที่ได้รับสนับสนุนจากแหล่งทุนภายนอก" type="บาท" />
                </TextBold>
                {/* -----------------------เว้นให้เอ------------------------ */}
                <TextBold>
                    <ListForm number="2" description="งบประมาณที่ขอรับการสนับสนุนจากมหาวิทยาลัย" type="บาท" />
                </TextBold>
                {/* -----------------------เว้นให้เอ------------------------ */}

                <Row>
                    <Col md="12" className="text-right">
                        <Button color="success">บันทึกฟอร์ม</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default FormCustom