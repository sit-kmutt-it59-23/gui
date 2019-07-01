import React, { Component } from 'react'
import { Form, Input, InputNumber, Col } from 'antd'
import styled from 'styled-components'

const FormItem = Form.Item
const { TextArea, Group } = Input

const SpanMarginLeft = styled.span`
    padding-left: 20px;
`

class InferFrom extends Component {
    render() {
        const { getFieldDecorator } = this.props.form
        const NameLayout = {
            labelAlign: 'left',
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4, offset: 2 },
                md: { span: 3, offset: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
                md: { span: 13, offset: 1 },

            }
        }

        const NameEnLayout = {
            labelAlign: 'left',
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8, offset: 2 },
                md: { span: 4, offset: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 13 },

            }
        }

        const TopicLayout = {
            labelAlign: 'left',
            labelCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 21, offset: 3 },

            }
        }

        const NumberLayout = {
            labelAlign: 'left',
            labelCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 12, offset: 2 },
                md: { span: 10, offset: 4 },
            },
            wrapperCol: {
                xs: { span: 18, offset: 6 },
                sm: { span: 10, offset: 0 },
                md: { span: 10, offset: 0 },

            },
            colon: false
        }

        const TextAreaLayout = {
            labelAlign: 'left',
            labelCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 2 },
                md: { span: 12, offset: 4 },
            },
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 2 },
                md: { span: 14, offset: 4 },
            },
            colon: false
        }

        const ListTextField = {
            labelCol: {
                xs: { span: 2, offset: 0 },
                sm: { span: 1, offset: 2 },
                md: { span: 1, offset: 2 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 19 },
                md: { span: 18 },
            },
            colon: false
        }

        const CountLayout = {
            labelAlign: 'left',
            labelCol: {
                xs: { offset: 4 },
                sm: { span: 9, offset: 1 },
                md: { span: 9, offset: 2 },
            },
            wrapperCol: {
                xs: { offset: 4 },
            },
            colon: false
        }

        return (
            <Form >
                <FormItem label="ชื่อโครงการ" {...NameLayout}>
                    {getFieldDecorator('name', {})(<Input />)}
                </FormItem>
                <FormItem label="ชื่อโครงการ (ภาษาอังกฤษ)" {...NameEnLayout}>
                    {getFieldDecorator('name_en', {})(<Input />)}
                </FormItem>
                <FormItem label="ประเภทโครงการกิจกรรม ได้ดังนี้" {...TopicLayout}>
                    <FormItem label="1. ด้านพัฒนาทักษะทางวิชาการและวิชาชีพ" {...NumberLayout}>
                        {getFieldDecorator('hours_amount-educational')(<InputNumber min={0} />)}
                        <SpanMarginLeft>ชั่วโมง</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="2. ด้านกีฬาและการส่งเสริมสุขภาพ" {...NumberLayout}>
                        {getFieldDecorator('hours_amount-health')(<InputNumber min={0} />)}
                        <SpanMarginLeft>ชั่วโมง</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="3. ด้านกิจกรรมจิตอาสาและบำเพ็ญประโยชน์" {...NumberLayout}>
                        {getFieldDecorator('hours_amount-community')(<InputNumber min={0} />)}
                        <SpanMarginLeft>ชั่วโมง</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="4. ด้านทำนุบำรุงศิลปะและวัฒนธรรม" {...NumberLayout}>
                        {getFieldDecorator('hours_amount-arts')(<InputNumber min={0} />)}
                        <SpanMarginLeft>ชั่วโมง</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="5. ด้านพัฒนาคุณลักษณะ" {...NumberLayout}>
                        {getFieldDecorator('hours_amount-characteristics')(<InputNumber min={0} />)}
                        <SpanMarginLeft>ชั่วโมง</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="6. ด้านความภาคภูมิใจและความผูกพันมหาวิทยาลัย" {...NumberLayout}>
                        {getFieldDecorator('hours_amount-loyality')(<InputNumber min={0} />)}
                        <SpanMarginLeft>ชั่วโมง</SpanMarginLeft>
                    </FormItem>
                </FormItem>
                <FormItem label="การเทียบค่ากิจกรรมตามคุณลักษณะที่พึงประสงค์ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT Student QF)" {...TopicLayout}>
                    <FormItem label="1. ความรู้ (Knowledge)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-knowledge')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="2. ทักษะเชิงวิชาชีพ (Professional Skill)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-profession')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="3. ทักษะการคิด (Thinking Skill)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-thinking')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="4. ทักษะการเรียนรู้ (Learning Skill)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-learning')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="5. ทักษะการสื่อสาร (Communication Skill)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-communication')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="6. ทักษะการจัดการ (Management Skill)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-management')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="7. ภาวะผู้นำ (Leadership)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-leadership')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                    <FormItem label="8. ความเป็นพลเมือง มจธ. (KMUTT’s citizenship)" {...NumberLayout}>
                        {getFieldDecorator('qf_amount-kmutt-citizen')(<InputNumber min={0} max={100} />)}
                        <SpanMarginLeft>%</SpanMarginLeft>
                    </FormItem>
                </FormItem>
                <FormItem label="หลักการและเหตุผล (เขียนไม่น้อยกว่าครึ่งกระดาษ A4 และทั้ง3 ย่อหน้าต้องสอดล้องกัน)" {...TopicLayout}>
                    <FormItem label="ย่อหน้าที่ 1 (อ้างที่มา สาเหตุ ปัญหา)" {...TextAreaLayout}>
                        {getFieldDecorator('rational_criterion_1')(<TextArea rows={5} />)}
                    </FormItem>
                    <FormItem label="ย่อหน้าที่ 2 (กล่าวถึงสิ่งที่จะทำในโครงการ)" {...TextAreaLayout}>
                        {getFieldDecorator('rational_criterion_2')(<TextArea rows={5} />)}
                    </FormItem>
                    <FormItem label="ย่อหน้าที่ 3 (กล่าวถึงประโยชน์ที่ได้รับจากการดำเนินโครงการ)" {...TextAreaLayout}>
                        {getFieldDecorator('rational_criterion_3')(<TextArea rows={5} />)}
                    </FormItem>
                </FormItem>
                <FormItem label="วัตถุประสงค์ (ไม่เกิน 3 ข้อ)" {...TopicLayout}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }}>
                        <Group>
                            <div id="border">
                                <FormItem label="1." {...ListTextField}>
                                    {getFieldDecorator('objective_1')(<Input />)}
                                </FormItem>
                                <FormItem label="2." {...ListTextField}>
                                    {getFieldDecorator('objective_2')(<Input />)}
                                </FormItem>
                                <FormItem label="3." {...ListTextField}>
                                    {getFieldDecorator('objective_3')(<Input />)}
                                </FormItem>
                            </div>
                        </Group>
                    </Col>
                </FormItem>
                <FormItem label="ผู้เข้าร่วมโครงการ" {...TopicLayout}>
                    <Col sm={{ span: 20, offset: 2 }} md={{ span: 17, offset: 3 }}>
                        <Group>
                            <div id="border">
                                <FormItem label="1. นักศึกษา" {...CountLayout}>
                                    {getFieldDecorator('attendee_amount-student')(<InputNumber min={0} />)}
                                    <SpanMarginLeft>คน</SpanMarginLeft>
                                </FormItem>
                                <FormItem label="2. อาจารย์" {...CountLayout}>
                                    {getFieldDecorator('attendee_amount-lecturer')(<InputNumber min={0} />)}
                                    <SpanMarginLeft>คน</SpanMarginLeft>
                                </FormItem>
                                <FormItem label="3. เจ้าหน้าที่" {...CountLayout}>
                                    {getFieldDecorator('attendee_amount-personnel')(<InputNumber min={0} />)}
                                    <SpanMarginLeft>คน</SpanMarginLeft>
                                </FormItem>
                                <FormItem label="4. บุคคลในชุมชน/นักเรียน" {...CountLayout}>
                                    {getFieldDecorator('attendee_amount-outsider')(<InputNumber min={0} />)}
                                    <SpanMarginLeft>คน</SpanMarginLeft>
                                </FormItem>
                            </div>
                        </Group>
                    </Col>
                </FormItem>
            </Form>
        )
    }
}

const WrappedInfer = Form.create({ name: 'project_proposal' })(InferFrom)

export default WrappedInfer