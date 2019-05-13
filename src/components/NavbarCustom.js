import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown
    , DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UserInfoText = styled.div`
    line-height: 1rem;
`;

class NavbarCustom extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">IT59-23</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="d-flex align-items-center flex-row">
                                <img className="rounded-circle" src="https://loremflickr.com/g/32/32/cat" />
                                <UserInfoText className="mx-2">
                                    <p className="m-0">สยาม แย้มแสงสังข์</p>
                                    <p className="m-0"><small>ชมรมนาฏยโขนละคร</small></p>
                                </UserInfoText>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    ดูโปรไฟล์
                                    </DropdownItem>
                                <DropdownItem>
                                    การตั้งค่า
                                    </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    ออกจากระบบ
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default NavbarCustom