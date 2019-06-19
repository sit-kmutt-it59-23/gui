import React, { Component } from 'react'
import { Tabs } from 'antd'

import ContentTab from './sections/Tracking/ContentTab'

const { TabPane } = Tabs

class ProjectTacking extends Component {
    render() {
        return (
            <Tabs type="card" >
                <TabPane tab="โครงการทำบุญชมรม" key="1" >
                    <br />
                    <ContentTab />
                </TabPane>
                <TabPane tab="โครงการนาฏยโขนละครอาสา" key="2">
                    <br />
                    <ContentTab />
                </TabPane>
                <TabPane tab="โครงการสอนชาวต่างชาติ" key="3">
                    <br />
                    <ContentTab />
                </TabPane>
            </Tabs>
        )
    }
}

export default ProjectTacking