import React, { Component } from 'react'
import { ListGroup, } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'

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
                <NavbarPart menu={Infer} isOpen={this.props.infer} type="infer" />
                <NavbarPart menu={Offer} isOpen={this.props.offer} type="offer" />
                <NavbarPart menu={AboutClub} isOpen={this.props.aboutclub} type="aboutclub" />
            </StyledListGroup>
        )
    }
}


const mapStateToProps = state => ({
    infer: state.sidebar.infer,
    offer: state.sidebar.offer,
    aboutclub: state.sidebar.aboutclub
})

export default connect(mapStateToProps)(Sidebar)