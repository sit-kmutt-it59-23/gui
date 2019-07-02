import React, { Component } from 'react'
import { Form } from 'antd'

const FormItem = Form.Item

class InferFrom extends Component {
    render() {
        const { getFieldDecorator } = this.props.form
        
        return (
            <Form>
               
            </Form>

        )
    }
}

const WrappedInfer = Form.create({ name: 'project_proposal' })(InferFrom)

export default WrappedInfer