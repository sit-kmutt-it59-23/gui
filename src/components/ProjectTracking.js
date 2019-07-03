import React, { Component } from 'react'
import { Empty, Spin, Tabs } from 'antd'

import ContentTab from './sections/tracking/ContentTab'
import axiosInstance from 'scripts/Api';

const { TabPane } = Tabs

class ProjectTacking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            error: null,
            loading: true
        }
    }
    
    componentDidMount() {
        this.getData();
    }

    getData() {
        axiosInstance.get('/organizations/2d648fc3-10aa-4c9b-8e2d-f4d27b1b9caa/projects?has_document&current_edu_year')
        .then(response => {
            this.setState({
                data: response.data,
            })
        })
        .catch(error => {
            this.setState({
                error: error,
            })
        }).finally(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        let {data, loading, error} = this.state;
        let content;

        if (error) {
            content = <Empty description="เกิดข้อผิดพลาดขณะกำลังโหลดข้อมูล โปรดลองอีกครั้งในภายหลัง" />
        }
        else if (!data) {
            content = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="ไม่มีโครงการ" />
        }
        else {
            content = (
                <Tabs type="card" >
                    {
                        data.map((item) => {
                            return (
                                <TabPane tab={item.name} key={item.id} >
                                    <ContentTab project_id={item.id} />
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            )
        }
        
        return (
            <div style={{ padding: 20}}>
                <Spin size="large" spinning={loading} tip="กำลังโหลด..." >
                    {content}
                </Spin>
            </div>
        )
    }
}

export default ProjectTacking