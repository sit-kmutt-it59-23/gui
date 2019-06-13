import React, { Component , Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faFileAlt, faSitemap, faSlidersH, faUsers } from '@fortawesome/free-solid-svg-icons'

const {  Sider } = Layout
const { SubMenu } = Menu

const CustomFaIcon = styled(FontAwesomeIcon)`
    margin-right: 8px;
`

class Sidebar extends Component {
    render() {
        return (
            <Sider width={256} breakpoint="md" collapsedWidth="0">
                <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} defaultOpenKeys={[]} defaultSelectedKeys={[]}> 
                    <Menu.Item key="budget">
                        <CustomFaIcon icon={faFileInvoiceDollar} />
                        <span>Dashboard</span>
                    </Menu.Item>
                    {/* ----------------- เเบบเสนอโครงการ -----------------  */}
                    <SubMenu
                        key="infer"
                        title={
                            <span>
                                <CustomFaIcon icon={faFileAlt} />
                                <span>เสนอโครงการ</span>
                                
                            </span>
                        }
                    >
                        <Menu.Item key="test" >
                            <CustomFaIcon icon={faUsers} />
                            โครงการที่ผ่านการพิจารณางบ
                        </Menu.Item>
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            กรอกแบบฟอร์มโครงการ
                            <Link to="/projects" />
                        </Menu.Item>
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            ติดตามโครงการ
                        </Menu.Item>
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            แบบเสนอโครงการที่อนุมัติ
                        </Menu.Item>
                    </SubMenu>
                    {/* ----------------- เเบบสรุปโครงการ -----------------  */}
                    <SubMenu 
                        key="offer"
                        title={
                            <span>
                                <CustomFaIcon icon={faFileAlt} />
                                <span>สรุปโครงการ</span>
                                
                            </span>
                        }
                    >
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            โครงการที่รอสรุปผล
                        </Menu.Item>
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            โครงการที่กำลังสรุปผล
                            <Link to="/projects" />
                        </Menu.Item>
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            ติดตามโครงการ
                        </Menu.Item>
                        <Menu.Item >
                            <CustomFaIcon icon={faUsers} />
                            โครงการที่สรุปผลแล้ว
                        </Menu.Item>
                    </SubMenu>
                    {/* ----------------- อื่นๆ -----------------  */}
                    <Menu.Item key="budget">
                        <CustomFaIcon icon={faFileInvoiceDollar} />
                        <span>งบประมาณ</span>
                    </Menu.Item>
                    <Menu.Item key="club">
                        <CustomFaIcon icon={faUsers} />
                        <span>ข้อมูลชมรม</span>
                    </Menu.Item>
            </Menu>
        </Sider>
        )
    }
}



export default Sidebar