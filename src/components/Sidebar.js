import React, { Component } from 'react';
import { ListGroup, } from 'reactstrap';
import styled from 'styled-components';

import NavbarPart from './sections/Navbar/SidebarPart'
import { Infer, Offer, AboutClub } from './sections/Navbar/DataNavbar'

const StyledListGroup = styled(ListGroup)`
    font-size : 12px;
    background-color:#d6d8db;
    border-radius:20px;
`

class Sidebar extends Component {
    render() {

        return (
            <StyledListGroup>
                <NavbarPart menu={Infer} />
                <NavbarPart menu={Offer} />
                <NavbarPart menu={AboutClub} />
            </StyledListGroup>
        )
    }
}

export default Sidebar