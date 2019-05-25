import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
     Navbar, NavbarBrand, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


import MenuPushLeft from '../sections/MenuPushLeft'
import Logo from '../assets/images/LogoNon-Content.png'

const UserInfoText = styled.div`
    line-height: 1rem;
`

const TextTruncated = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
`

class NavbarCustom extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <Navbar color="primary" dark expand="md" className="d-flex justify-content-between">
                <MenuPushLeft />
                <NavbarBrand tag={Link} to="/">
                    <img alt="Logo KMUTT Actxis" src={Logo} height="26px" className="mr-1"/>
                    <h6 className="list-inline-item">KMUTT Actxis</h6>
                </NavbarBrand>
                <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="primary" className="d-flex align-items-center flex-row">
                        <img className="rounded-circle list-inline-item mr-1" onClick={this.toggle} alt="Profile Pictrue" src="https://loremflickr.com/g/32/32/cat" />
                        <UserInfoText className="mx-2 text-left d-none d-md-block">
                            <TextTruncated className="m-0">มดน้อย ในไร่ส้ม</TextTruncated>
                            <TextTruncated className="m-0"><small>สโมสรนักศึกษาคณะเทคโนโลยีสารสนเทศ</small></TextTruncated>
                        </UserInfoText>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem >ดูโปรไฟล์</DropdownItem>
                        <DropdownItem >การตั้งค่า</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>ออกจากระบบ</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </Navbar>
        )
    }
}

export default NavbarCustom