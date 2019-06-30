import React, { Component, Fragment } from 'react';
import { Steps, Button, message } from 'antd'
import { Infer1, Infer2, Infer3 } from './sections/form'

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
                <Steps current={current} style={{ padding: '30px 80px' }}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} description={item.description} status={item.status} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action text-right" >
                    {current > 0 && (
                        <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                </div>
            </Fragment>
        )
    }
}

export default ProjectProposalForm