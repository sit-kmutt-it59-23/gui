import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                        <Label className="col-md-2 col-form-label"><b>ชื่อโครงการ:</b></Label>
                        <InputCustom className="form-control col-md-8" type="text"/>
                    </Row>
                </FormGroup>
                <TextBold>ประเภทโครงการกิจกรรม ได้ดังนี้:</TextBold>
                <ListForm number="1" description="ด้านพัฒนาทักษะทางวิชาการและวิชาชีพ" type="ชั่วโมง"/>
                <ListForm number="2" description="ด้านกีฬาและการส่งเสริมสุขภาพ" type="ชั่วโมง"/>
                <ListForm number="3" description="ด้านกิจกรรมจิตอาสาและบำเพ็ญประโยชน์" type="ชั่วโมง"/>
                <ListForm number="4" description="ด้านทำนุบำรุงศิลปะและวัฒนธรรม" type="ชั่วโมง"/>
                <ListForm number="5" description="ด้านพัฒนาคุณลักษณะ" type="ชั่วโมง"/>
                <ListForm number="6" description="ด้านความภาคภูมิใจและความผูกพันมหาวิทยาลัย" type="ชั่วโมง"/>

                <TextBold className="mb-4">
                    การเทียบค่ากิจกรรมตามคุณลักษณะที่พึงประสงค์ของมหาวิทยาลัย
                    เทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT Student QF):
                </TextBold>
                <ListForm number="1" description="ความรู้ (Knowledge)" type="%"/>
                <ListForm number="2" description="ทักษะเชิงวิชาชีพ (Professional Skill)" type="%"/>
                <ListForm number="3" description="ทักษะการคิด (Thinking Skill)" type="%"/>
                <ListForm number="4" description="ทักษะการเรียนรู้ (Learning Skill)" type="%"/>
                <ListForm number="5" description="ทักษะการสื่อสาร (Communication Skill" type="%"/>
                <ListForm number="6" description="ทักษะการจัดการ (Management Skill)" type="%"/>
                <ListForm number="7" description="ภาวะผู้นำ (Leadership)" type="%"/>
                <ListForm number="8" description="ความเป็นพลเมือง มจธ. (KMUTT’s citizenship)" type="%"/>

                <TextArea header="หลักการและเหตุผล" description="เขียนไม่น้อยกว่าครึ่งกระดาษ A4" />
                
            </Form>
        )
    }
}

export default FormCustom