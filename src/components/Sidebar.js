import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'

import { changeSelectedKey, changeSubMenuKeys } from '../redux/sidebar'

const { Sider} = Layout
const { SubMenu } = Menu

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.changeSelectedKey = this.changeSelectedKey.bind(this)
        this.openSubMenu = this.openSubMenu.bind(this)

    }

    changeSelectedKey(key) {
        this.props.dispatch(changeSelectedKey(key))
    }

    openSubMenu(key) {
        this.props.dispatch(changeSubMenuKeys(key))
    }

    render() {
        return (
            <Sider width={256} trigger={null} collapsible collapsed={this.props.sidebar} >
                <Menu mode="inline"
                    style={{ height: '100%', borderRight: 0, paddingTop: '10px' }}
                    defaultOpenKeys={this.props.submenukeys}
                    defaultSelectedKeys={this.props.selectedkey}
                >
                    <SubMenu key="Documents" onTitleClick={() => this.openSubMenu("Documents")}
                        title={
                            <span >
                                <Icon type="file-text" />
                                <span><strong>เอกสารโครงการ</strong></span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup title="แบบเสนอโครงการ">   
                            <Menu.Item key="Documents_infer_all" onClick={() => this.changeSelectedKey(["Documents_infer_all"])}>
                                แบบเสนอโครงการทั้งหมด
                                <Link to="/projects" />
                            </Menu.Item>
                            <Menu.Item key="Documents_infer_1" onClick={() => this.changeSelectedKey(["Documents_infer_1"])}>
                                โครงการทำบุญชมรม
                                <Link to="#" />
                            </Menu.Item>
                            <Menu.Item key="Documents_infer_2" onClick={() => this.changeSelectedKey(["Documents_infer_2"])}> 
                                โครงการนาฏยโขนละครอาสา
                                <Link to="#" />
                            </Menu.Item>
                            <Menu.Item key="Documents_infer_3" onClick={() => this.changeSelectedKey(["Documents_infer_3"])}>
                                โครงการสอนชาวต่างชาติ
                                <Link to="#" />
                            </Menu.Item>
                        </Menu.ItemGroup>
                        {/* ต้องรอให้กิจกรรมจบเเล้ว เเละกองกิจอนุญาตให้เริ่มเขียนสรุปโครงการ Menu.Item ถึงจะขึน */}
                        <Menu.ItemGroup title="แบบสรุปโครงการ" >
                            <Menu.Item key="Documents_offer_all" onClick={() => this.changeSelectedKey(["Documents_offer_all"])}>
                                เเบบสรุปโครงการทั้งหมด
                            </Menu.Item>
                            <Menu.Item key="Documents_offer_1" onClick={() => this.changeSelectedKey(["Documents_offer_1"])}>
                                โครงการทำบุญชมรม
                                <Link to="#" />
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="Tracking"  onClick={() => this.changeSelectedKey(["Tracking"])} >
                        <Icon type="tag" />
                        <span><strong>ติดตามโครงการ</strong></span>
                        <Link to="/tracking" />
                    </Menu.Item>
                    <Menu.Item key="Budget" onClick={() => this.changeSelectedKey(["Budget"])}>
                        <Icon type="dollar" />
                        <span><strong>งบประมาณ</strong></span>
                    </Menu.Item>
                    <SubMenu key="etc"  onTitleClick={() => this.openSubMenu("etc")}
                        title={
                            <span>
                                <Icon type="info-circle" />
                                <span><strong>ข้อมูลเพิ่มเติม</strong></span>
                            </span>
                        }
                    >
                        <Menu.Item key="information_organize" onClick={() => this.changeSelectedKey(["information_organize"])}>
                            ข้อมูลหน่วยงาน
                            <Link to="#" />
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = state => ({
    sidebar: state.sidebar.sidebar,
    selectedkey: state.sidebar.selectedkey,
    submenukeys: state.sidebar.submenukeys
})

export default connect(mapStateToProps)(Sidebar)