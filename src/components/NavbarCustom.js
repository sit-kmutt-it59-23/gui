import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import styled from 'styled-components'

import LogoImg from 'assets/images/LogoNon-Content.png';

const Nav = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
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

const menu = (
    <Menu>
        <Menu.Item>
            <a href="#">
                ดูโปรไฟล์
            </a>
        </Menu.Item>
        <Menu.Item>
            <a href="#">
                การตั้งค่า
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a href="#">
                ออกจากระบบ
            </a>
        </Menu.Item>
    </Menu>
)

class NavbarCustom extends Component {
    render() {
        return (
            <Nav>
                <LinkStyleNone to="/">
                    <Logo src={LogoImg} />
                    <span>
                        <strong>KMUTT Act<span style={{ color: '#E88044' }}>x</span>is</strong>
                    </span>
                </LinkStyleNone>
                <Dropdown overlay={menu} trigger={['click']}>
                    <LinkMenu to="#">
                        <ProfileImg alt="Profile Pictrue" src="https://loremflickr.com/g/32/32/cat" />
                        <ProfileName className="hidden-xs">
                            59130500062
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


export default NavbarCustom