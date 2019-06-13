import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Button, Icon } from 'antd'
import styled from 'styled-components'

import LogoImg from 'assets/images/actxis-logo-solid-white-transparent.svg';

const Nav = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px !important;
    color: #ffffff;
    width: 100%;
    background-color: ${props => props.inputColor || "#e88044"};
`

const LinkStyleNone = styled(Link)`
    color: #ffffff !important;
`

const Logo = styled.img`
    height: 35px;
    margin-right: 8px;
`

const ButtonNavbar = styled(Button)`
    font-size: 14px;
    background: none;
    border: none;
    color: #fff;
    &:hover,&:active,&:visited, &:link,&:focus{
        background: #ef6413;
        border: none;
    }
`

const ProfileImg = styled.img`
    border-radius:100%;
`

const ProfileName = styled.span`
    margin-left:10px;
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
                    <span><strong>KMUTT Actxis</strong></span>
                </LinkStyleNone>
                <Dropdown overlay={menu} trigger={['click']}>
                    <ButtonNavbar size="large">
                        <ProfileImg alt="Profile Pictrue" src="https://loremflickr.com/g/32/32/cat" />
                        <ProfileName className="hidden-xs">มดน้อย ในไร่ส้ม</ProfileName>
                        <Icon type="down" />
                    </ButtonNavbar>
                </Dropdown>
            </Nav>
        )
    }
}

export default NavbarCustom