import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faFileAlt, faSitemap, faSlidersH, faUsers } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/NavbarCustom'

const {  Sider, Content } = Layout
const { SubMenu } = Menu

const CustomContentLayout = styled(Layout)`
    min-height: calc(100vh - 64px) !important;
`

const CustomFaIcon = styled(FontAwesomeIcon)`
    margin-right: 8px;
`

class DefaultLayout extends Component {
    render() {
        let breadcrumb;
        if (this.props.breadcrumb) {
            breadcrumb = this.props.breadcrumb.map((item, idx) => {
                return (
                    <Breadcrumb.Item>
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
                    <Sider width={256} breakpoint="md" collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <Menu
                            mode="inline"
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="organization">
                                <CustomFaIcon icon={faSitemap} />
                                <span>องค์กร</span>
                            </Menu.Item>
                            <Menu.Item key="project">
                                <CustomFaIcon icon={faFileAlt} />
                                <span>โครงการ</span>
                                <Link to="/projects" />
                            </Menu.Item>
                            <Menu.Item key="budget">
                                <CustomFaIcon icon={faFileInvoiceDollar} />
                                <span>งบประมาณ</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <CustomFaIcon icon={faSlidersH} />
                                        <span>แผงตวบคุม</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="user">
                                    <CustomFaIcon icon={faUsers} />
                                    ผู้ใช้
                                </Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
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