import React, { Component, Fragment } from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import PropTypes from 'prop-types'


const StyledListGroupItemTopic = styled(ListGroupItem)`
    border:none;

    &:hover{
        cursor: pointer;
    } 
    &:last-child{
        border:none;
        border-top-right-radius:0px;
        border-top-left-radius:0px;  
    }
`
const StyledListGroupItem = styled(ListGroupItem)`
    border:none;
        
    &:last-child{
        border:none;
        border-top-right-radius:0px;
        border-top-left-radius:0px;  
    }
`
const StyledLink = styled(Link)`
    color: #000000;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

class SidebarPart extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let topic;
        let subMenu;

        if (this.props.menu.sub.length === 0) {

            topic = <StyledLink to={this.props.menu.topic_path} className="d-none d-md-block">
                        <StyledListGroupItemTopic action color="dark">{this.props.menu.topic}</StyledListGroupItemTopic>
                    </StyledLink>
        } else {
            topic = <StyledListGroupItemTopic onClick={this.toggle} action className="d-none d-md-block list-group-item-dark">
                        <span className="float-left">{this.props.menu.topic}</span>
                        <FontAwesomeIcon icon="sort-down"  className="float-right d-none d-lg-block" />
                    </StyledListGroupItemTopic>
        }
      

        if (this.props.menu.sub.length !== 0) {
            subMenu =
            this.props.menu.sub.map((value, idx) => {
                const { name, path } = value
                return (
                    <StyledLink to={path} key={idx}>
                        <StyledListGroupItem color="secondary" className="d-none d-md-block" action>{name}</StyledListGroupItem>
                    </StyledLink>
                )
            })
        }

        return (
            <Fragment>
                {topic}
                <Collapse isOpen={this.state.isOpen}>
                    {subMenu}
                </Collapse>
            </Fragment>
        )
    }
}

SidebarPart.propTypes = {
    menu: PropTypes.object
}

export default SidebarPart