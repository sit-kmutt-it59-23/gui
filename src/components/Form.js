import React, { Component, Fragment } from 'react';
import { Steps, Button, message, Col, Icon, Layout } from 'antd'
import { Infer1, Infer2, Infer3 } from './sections/form'
import Header from './sections/HeaderCustom.js'
import styled from 'styled-components'

const { Step } = Steps

const steps = [
    {
        title: 'ส่วนที่ 1',
        description: '',
        status: '',
        content: <Infer1 />,
    },
    {
        title: 'ส่วนที่ 2',
        description: '',
        status: '',
        content: <Infer2 />,
    },
    {
        title: 'ส่วนที่ 3',
        description: '',
        status: '',
        content: <Infer3 />,
    },
]

const ButtonPrev = styled(Button)`
    background-color: #D9D9D9;
    color: #707070;
    border: none;
    &:hover,&:active,&:visited,&:link{
        background-color: #D9D9D9;
    }
     &:focus{
        background-color: #D9D9D9;
        color: #707070;
    }
`

class ProjectProposalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
    }
    next() {
        const current = this.state.current + 1
        this.setState({ current })
    }

    prev() {
        const current = this.state.current - 1
        this.setState({ current })
    }

    render() {
        const { current } = this.state
        return (
            <Fragment>
                <Header
                    topic="แบบฟอร์มเสนอโครงการประกวดนาฏกรรมนานาชาติ"
                    description="ชมรมนาฏยโขนละคร ปีการศึกษา 2562"
                    fixed={true}
                >
                    <Button>บันทึก</Button>
                    <Button style={{ marginLeft: 10 }}>บันทึก</Button>
                    <Button style={{ marginLeft: 10 }}>บันทึก</Button>
                </Header>
                <Steps current={current} style={{ padding: '30px 80px' }}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} description={item.description} status={item.status} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <Col className="steps-action text-right" xs={{ span: 24 }} sm={{ span: 10, offset: 12 }} md={{ span: 8, offset: 12 }}>
                    {current > 0 && (
                        <ButtonPrev type="primary" style={{ marginRight: 8 }} onClick={() => this.prev()}>
                            <Icon type="left" />
                            ก่อนหน้า
                        </ButtonPrev>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            ส่งเเบบแบบฟอร์ม
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            หน้าถัดไป
                            <Icon type="right" />
                        </Button>
                    )}
                </Col>
            </Fragment>
        )
    }
}

export default ProjectProposalForm