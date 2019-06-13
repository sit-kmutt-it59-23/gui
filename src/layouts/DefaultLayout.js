import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import styled from 'styled-components'

import Navbar from '../components/NavbarCustom'
import Sidebar from '../components/Sidebar'

const { Content } = Layout

const CustomContentLayout = styled(Layout)`
    min-height: calc(100vh - 64px) !important;
`

class DefaultLayout extends Component {
    render() {
        let breadcrumb;
        if (this.props.breadcrumb) {
            breadcrumb = this.props.breadcrumb.map((item, idx) => {
                return (
                    <Breadcrumb.Item key={idx}>
                        {
                            item.link || !item.active
                            ? <Link to={item.link}>{item.text}</Link>
                            : item.text
                        }
                    </Breadcrumb.Item>
                )
            })
        }
        else {
            breadcrumb = <Breadcrumb.Item><Link to="/">หน้าแรก</Link></Breadcrumb.Item>
        }
        return (
            <Layout>
                <Navbar />
                <CustomContentLayout>
                    <Sidebar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                            {breadcrumb}
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.middle}
                        </Content>
                    </Layout>
                </CustomContentLayout>
            </Layout>
        )
    }
}

export default DefaultLayout