import React, { Fragment, Component } from 'react'
import { NavbarToggler } from 'reactstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Infer, Offer, AboutClub } from './DataNavbar'
import Topic from './PartSidebarOnMobile'
import Logo from '../../../assets/images/Logo.png'

const Menu = styled.div`
    width: 45vw;
    height: 100vh;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform .5s
                cubic-bezier(0, .52, 0, 1);
    z-index: 100;
    &.hide {
        transform: translate3d(-100vw, 0, 0);
    }
    &.show {
        transform: translate3d(0vw, 0, 0);
    }
`

const ShadowBackground = styled.div`
    position: absolute;
    top:0px;
    bottom:0px;
    right:0px;
    left:0px;
    width: 100vw;
    height: 100vh;
    z-index: 90;
    &.hide{
        width: 0vw;
        height: 0vh;
    }
    &.show {
        background-color: rgba(0, 0, 0, 0.4);
    }
`

class SidebarOnMobile extends Component {
    constructor(props) {
        super(props)

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);

        this.state = {
            visible: false
        }
    }
    handleMouseDown() {
        this.toggleMenu()
    }
    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        let visibility = this.state.visible ? 'show d-md-none' : 'hide';
        return (
            <Fragment>
                <NavbarToggler onClick={this.toggleMenu} />
                <Menu className={visibility}>
                    <div className="text-center mt-4 mb-4">
                        <img alt="Logo KMUTT Actxis" src={Logo} width="120px" />
                    </div>
                    <Topic menu={Infer}/>
                    <Topic menu={Offer}/>
                    <Topic menu={AboutClub}/>
                </Menu>
                <ShadowBackground className={visibility} onMouseDown={this.handleMouseDown}/>
            </Fragment>
        )
    }
}

SidebarOnMobile.propTypes = {
    menu: PropTypes.object
}


export default SidebarOnMobile