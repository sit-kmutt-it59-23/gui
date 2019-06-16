import React, { Component } from 'react'
import { Tabs } from 'antd'

import ContentTab from './sections/Tracking/ContentTab'

const { TabPane } = Tabs

class ProjectTacking extends Component {
    render() {
        return (
            <Tabs type="card" >
                <TabPane tab="Test" key="1" >
                    <ContentTab />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        )
    }
}

export default ProjectTacking