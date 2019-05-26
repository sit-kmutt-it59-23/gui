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
                        <Col xs="4" sm="2" md="2" className="col-form-label">
                            <TextBold>ชื่อโครงการ: </TextBold>
                        </Col>
                        <Col xs="7" sm="8" md="8">
                            <InputCustom className="form-control" name="" type="text" />
                        </Col>
                    </Row>
                </FormGroup>
                <TextBold>ประเภทโครงการกิจกรรม ได้ดังนี้:</TextBold>
                <ListForm number="1" description="ด้านพัฒนาทักษะทางวิชาการและวิชาชีพ" name="" type="ชั่วโมง"  />
                <ListForm number="2" description="ด้านกีฬาและการส่งเสริมสุขภาพ" name="" type="ชั่วโมง" />
                <ListForm number="3" description="ด้านกิจกรรมจิตอาสาและบำเพ็ญประโยชน์" name="" type="ชั่วโมง"  />
                <ListForm number="4" description="ด้านทำนุบำรุงศิลปะและวัฒนธรรม" name="" type="ชั่วโมง" />
                <ListForm number="5" description="ด้านพัฒนาคุณลักษณะ" name="" type="ชั่วโมง" />
                <ListForm number="6" description="ด้านความภาคภูมิใจและความผูกพันมหาวิทยาลัย" type="ชั่วโมง" />

                <TextBold>
                    การเทียบค่ากิจกรรมตามคุณลักษณะที่พึงประสงค์ของมหาวิทยาลัย
                    เทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT Student QF):
                </TextBold>
                <ListForm number="1" description="ความรู้ (Knowledge)" type="%"/>
                <ListForm number="2" description="ทักษะเชิงวิชาชีพ (Professional Skill)" type="%"/>
                <ListForm number="3" description="ทักษะการคิด (Thinking Skill)" type="%"/>
                <ListForm number="4" description="ทักษะการเรียนรู้ (Learning Skill)" type="%"/>
                <ListForm number="5" description="ทักษะการสื่อสาร (Communication Skill)" type="%"/>
                <ListForm number="6" description="ทักษะการจัดการ (Management Skill)" type="%"/>
                <ListForm number="7" description="ภาวะผู้นำ (Leadership)" type="%" />
                <ListForm number="8" description="ความเป็นพลเมือง มจธ. (KMUTT’s citizenship)" type="%" />

                <TextArea header="หลักการและเหตุผล" description="เขียนไม่น้อยกว่าครึ่งกระดาษ A4" name="" />

                <TextBold className="mb-4">วัตถุประสงค์ </TextBold>
                <span>(ไม่เกิน 3 ข้อ)</span>
                <TextBold> : </TextBold>
                <FormGroup>
                    <Row className="mt-3">
                        <Col xs="2" md="1" className="text-right col-form-label">1. </Col>
                        <Col xs="9" md="10"><InputCustom className="form-control" name="" type="text" /></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col xs="2" md="1" className="text-right col-form-label">2. </Col>
                        <Col xs="9" md="10"><InputCustom className="form-control" name="" type="text" /></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col xs="2" md="1" className="text-right col-form-label">3. </Col>
                        <Col xs="9" md="10"><InputCustom className="form-control" name="" type="text" /></Col>
                    </Row>
                </FormGroup>

                <TextBold className="mb-4">ผู้เข้าร่วมโครงการ:</TextBold>
                <ListForm number="1" description="นักศึกษา" type="คน" name="" />
                <ListForm number="2" description="อาจารย์" type="คน" name="" />
                <ListForm number="3" description="เจ้าหน้าที่" type="คน" name="" />
                <ListForm number="4" description="บุคคลในชุมชน/นักเรียน" type="คน" name="" />

                <TextArea header="ลักษณะกิจกรรม" name=""
                    description="เขียนบรรยายรูปแบบการจัดกิจกรรมพอสังเขป ให้เห็นภาพการจัดกิจกรรม" />
                <TextArea header="ลักษณะกิจกรรมที่จัดขึ้นสอดคล้องกับหลักเกียรติและศักดิ์ของนักศึกษา(Code of Honor) ดังนี้"
                    name="" description="จงอธิบาย" />

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
                {/* -----------------------เว้นให้เอ------------------------ */}

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
                {/* -----------------------เว้นให้เอ------------------------ */}

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
                {/* -----------------------เว้นให้เอ------ลบ div ข้างล่างให้ด้วย------------------ */}
                <div></div>

                
                <TextBold >รายละเอียดงบประมาณ: </TextBold>
                <ListForm description="โครงการนี้มีการใช้งบประมาณโดยรวมทั้งหมด" type="บาท" name=""/>
                <span>(เฉพาะเงิน) จำแนกได้ดังนี้ </span>
                <TextBold>
                    <ListForm number="1" description="งบประมาณที่ได้รับสนับสนุนจากแหล่งทุนภายนอก" type="บาท" name="" />
                </TextBold>
                {/* -----------------------เว้นให้เอ------------------------ */}
                <TextBold>
                    <ListForm number="2" description="งบประมาณที่ขอรับการสนับสนุนจากมหาวิทยาลัย" type="บาท" name="" />
                </TextBold>
                {/* -----------------------เว้นให้เอ------------------------ */}

                <Row>
                    <Col xs="12" sm={{size:3,offset:9}} md={{size:3,offset:9}} className="text-center">
                        <Button color="success">ส่งแบบฟอร์ม</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default FormCustom