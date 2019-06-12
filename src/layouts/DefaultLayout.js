import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faFileAlt, faSitemap, faSlidersH, faUsers } from '@fortawesome/free-solid-svg-icons'

import LogoImg from 'assets/images/actxis-logo-solid-white-transparent.svg';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Trigger = styled(Icon)`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #1890ff;
    }
`

const CustomHeader = styled(Header)`
    padding: 0 16px !important;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
`

const CustomMenu = styled(Menu)`
    margin-left: auto;
    line-height: '64px';
`
const CustomContentLayout = styled(Layout)`
    min-height: calc(100vh - 64px) !important;
`

const LogoWrapper = styled.div`
    display: 'flex';
    flex-direction: 'row';
    align-items: 'center';

    a {
        color: #ffffff !important;
    }
`

const Logo = styled.img`
    height: 32px;
    margin-right: 16px;
`

const CustomFaIcon = styled(FontAwesomeIcon)`
    margin-right: 8px;
`

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
                <CustomHeader>
                    <LogoWrapper>
                        <Link to="/">
                            <Logo src={LogoImg} />
                            <span><strong>KMUTT Actxis</strong></span>
                        </Link>
                    </LogoWrapper>
                    <CustomMenu theme="dark" mode="horizontal">
                        <Menu.Item key="profile">โปรไฟล์</Menu.Item>
                    </CustomMenu>
                </CustomHeader>
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
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>หน้าแรก</Breadcrumb.Item>
                            <Breadcrumb.Item>โครงการ</Breadcrumb.Item>
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