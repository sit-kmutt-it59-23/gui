import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { sidebarToggle, changeSelectedKey } from '../redux/sidebar'
import LogoImg from 'assets/images/LogoNon-Content.png';

const Nav = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    padding: 10px 16px !important;
    width: 100%;
    background-color: #ffffff;
    z-index:1;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
`

const LinkStyleNone = styled(Link)`
    color: #464545 !important;
`

const Logo = styled.img`
    height: 30px;
    margin-right: 8px;
`

const ProfileImg = styled.img`
    border-radius: 100%;
    margin-right: 10px;
    height:42px;
    width:42px;
`
const LinkMenu = styled(Link)`
    display: flex;
    align-items: center;
    color: #464545;
    &:hover,&:active,&:visited, &:link,&:focus{
        color: #464545;
        border: none;
    }
`

const ProfileName = styled.div`
    font-size:12px;
    margin-right:10px;
    hr{
        margin: 0;
        padding: 0;
        border:0.2px #464545 solid;
    }
`
const FlexCenterItem = styled.div`
    display: flex;
    align-items: center;
`

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="#">
                ดูโปรไฟล์
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="#">
                การตั้งค่า
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="#">
                ออกจากระบบ
            </Link>
        </Menu.Item>
    </Menu>
)

class NavbarCustom extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.changeSelectedKey = this.changeSelectedKey.bind(this)
    }

    toggle() {
        const { dispatch } = this.props
        dispatch(sidebarToggle())
    }

    changeSelectedKey() {
        const { dispatch } = this.props
        dispatch(changeSelectedKey(""))
    }

    render() {
        return (
            <Nav>
                <FlexCenterItem>
                    <Icon
                        className="trigger"
                        type={this.props.sidebar ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        style={{ marginRight: '15px', fontSize: '18px' }}
                    />
                    <LinkStyleNone to="/" onClick={this.changeSelectedKey}>
                        <Logo src={LogoImg} />
                        <span>
                            <strong>KMUTT Act<span style={{ color: '#E88044' }}>x</span>is</strong>
                        </span>
                    </LinkStyleNone>
                </FlexCenterItem>
                <Dropdown overlay={menu} trigger={['click']}>
                    <LinkMenu to="#">
                        <ProfileImg alt="Profile Pictrue" src="https://pbs.twimg.com/profile_images/1000002686677209088/D1d8M7jA_400x400.jpg" />
                        <ProfileName className="hidden-xs">
                            วรรณกานต์ สุวรรณดี
                            <hr />
                            ชมรมนาฏยโขนละคร
                        </ProfileName>
                        <Icon type="down" />
                    </LinkMenu>
                </Dropdown>
            </Nav >
        )
    }
}

const mapStateToProps = state => ({
    sidebar: state.sidebar.sidebar,
})

export default connect(mapStateToProps)(NavbarCustom)