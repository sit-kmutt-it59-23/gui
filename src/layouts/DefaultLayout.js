import React, { Component } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import Navbar from '../components/NavbarCustom'
import Sidebar from '../components/Sidebar'

const { Content } = Layout

const CustomContentLayout = styled(Layout)`
    min-height: calc(100vh - 64px) !important;
`

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
                <Navbar />
                <CustomContentLayout>
                    <Sidebar />
                        <Layout >
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