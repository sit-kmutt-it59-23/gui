import React, { Component, Fragment } from 'react';
import { Steps, Button, message, Col, Icon } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { Infer1, Infer2, Infer3 } from './sections/form'
import Header from './sections/HeaderCustom.js'

const { Step } = Steps

const steps = [
    {
        title: 'ส่วนที่ 1',
        description: 'กำลังกรอกแบบฟอร์ม',
        status: '',
        content: <Infer1 />,
    },
    {
        title: 'ส่วนที่ 2',
        description: 'รอกรอกแบบฟอร์ม',
        status: '',
        content: <Infer2 />,
    },
    {
        title: 'ส่วนที่ 3',
        description: 'รอกรอกแบบฟอร์ม',
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

const StepsCustom = styled(Steps)`
    height: 80px;
    align-items: center;
    background-color: #F8F9FA;
`

const ButtonCustom = styled(Button)`
    color: ${props => props.color || '#fff'};
    background-color: ${props => props.background || "#989898"};
    border:none;
    &:hover,&:active,&:visited,&:link{
        background-color: ${props => props.background|| "#989898"};
        color: ${props => props.color || '#fff'};
    }
     &:focus{
        background-color:${props => props.background};
        color: ${props => props.color || '#fff'};
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
                    topic="แบบฟอร์มเสนอโครงการประกวดนาฏกรรมนานาชาติ ชิงถ้วยฟอร์มเสนอโครงการประกวดนาฏกรรมนานาชาติ"
                    description="ชมรมนาฏยโขนละคร ปีการศึกษา 2562"
                    fixed={true}
                    hideChildenInSize="hidden-xs hidden-sm hidden-md"
                    headerRight={
                        <div>
                            <Button style={{ marginBottom: 5 }}>
                                <Icon type="eye" />
                                <span className="hidden-md">
                                    PREVIEW
                                </span>
                            </Button>
                            <ButtonCustom style={{ margin: '0 10px 5px 10px' }} color="#fff" background="#63A2D8">
                                <Icon type="save" />
                                <span className="hidden-md">
                                    SAVE FORM
                                </span>
                            </ButtonCustom>
                            <ButtonCustom color="#fff" background="#74D99F">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span className="hidden-md" style={{ marginLeft: 8 }}>
                                    SAVE FORM
                                </span>
                            </ButtonCustom>
                        </div>
                    }
                >
                    <StepsCustom current={current} style={{ padding: '0 15px' }}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} description={item.description} status={item.status} />
                        ))}
                    </StepsCustom>
                </Header>
                <div className="steps-content" style={{ padding: '20px 10px' }}>{steps[current].content}</div>
                <Col className="steps-action text-right" xs={{ span: 23 }} sm={{ span: 22 }} md={{ span: 20 }}>
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