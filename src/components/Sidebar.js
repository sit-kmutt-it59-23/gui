import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faFolderOpen, faMapMarkerAlt, faCoins } from '@fortawesome/free-solid-svg-icons'

import { inferToggle, offerToggle, aboutClubToggle } from '../redux/sidebar'

const { Sider } = Layout
const { SubMenu } = Menu

const CustomFaIcon = styled(FontAwesomeIcon)`
    margin-right: 14px;
    font-size:20px;
`

class Sidebar extends Component {
    render() {
        return (
            <Sider width={256} breakpoint="md" collapsedWidth="0">
                <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} defaultOpenKeys={[]} defaultSelectedKeys={[]}>
                    <SubMenu key="Documents"
                        title={
                            <span>
                                <CustomFaIcon icon={faFolderOpen} />
                                <span><strong>เอกสารโครงการ</strong></span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup key="g1"
                            title={
                                <span>
                                    <Link to="/projects" style={{ color: '#464545' }}>
                                        แบบเสนอโครงการ
                                     </Link>
                                </span>
                            }
                        >
                            <Menu.Item key="g1_1">โครงการทำบุญชมรม</Menu.Item>
                            <Menu.Item key="g1_2">โครงการนาฏยโขนละครอาสา</Menu.Item>
                            <Menu.Item key="g1_3">โครงการสอนชาวต่างชาติ</Menu.Item>
                        </Menu.ItemGroup>
                        {/* ต้องรอให้กิจกรรมจบเเล้ว เเละกองกิจอนุญาตให้เริ่มเขียนสรุปโครงการ Menu.Item ถึงจะขึน */}
                        <Menu.ItemGroup key="g2"
                            title={
                                <span>
                                    <Link to="#" style={{ color: '#464545' }}>
                                        แบบสรุปโครงการ
                                    </Link>
                                </span>
                            }
                        >
                            <Menu.Item key="g2_1">โครงการทำบุญชมรม</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="tracking">
                        <CustomFaIcon icon={faMapMarkerAlt} />
                        <span><strong>ติดตามโครงการ</strong></span>
                        <Link to="/tracking" />
                    </Menu.Item>
                    <Menu.Item key="budget">
                        <CustomFaIcon icon={faCoins} />
                        <span><strong>งบประมาณ</strong></span>
                    </Menu.Item>
                    <SubMenu key="etc"
                        title={
                            <span>
                                <CustomFaIcon icon={faInfoCircle} />
                                <span><strong>ข้อมูลเพิ่มเติม</strong></span>
                                
                            </span>
                        }
                    >
                        <Menu.Item key="information_organize">ข้อมูลหน่วยงาน</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = state => ({
    infer: state.sidebar.infer,
    offer: state.sidebar.offer,
    aboutclub: state.sidebar.aboutclub
})


export default connect(mapStateToProps)(Sidebar)