import React, { Component } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Navbar from '../components/NavbarCustom'
import Sidebar from '../components/Sidebar'

const { Content, Sider } = Layout

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
                                    paddingBottom: 20,
                                    minHeight: 280,
                                }}
                            >
                                {this.props.middle}
                            </Content>
                            {this.props.right ? <Sider>{this.props.right}</Sider>: null}
                        </Layout>
                </CustomContentLayout>
            </Layout>
        )
    }
}

DefaultLayout.propTypes = {
    middle: PropTypes.element,
    right: PropTypes.element
}

export default DefaultLayout