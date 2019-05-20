import React, { Component, Fragment } from 'react';
import { ListGroup, ListGroupItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const StyledListGroupItemTopic = styled(ListGroupItem)`
    border:none;

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

class NavbarPart extends Component {
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
        const { menu } = this.props
        let topic;
        let subMenu;

        if (menu.sub == 0) {
            topic = <StyledLink to={menu.topic_path}>
                        <StyledListGroupItemTopic action color="dark">{menu.topic}}</StyledListGroupItemTopic>
                    </StyledLink>
        } else {
            topic = <StyledListGroupItemTopic onClick={this.toggle} action className="list-group-item-dark">
                        <span className="float-left">{menu.topic}</span>
                        <FontAwesomeIcon icon="sort-down" className="float-right" />
                    </StyledListGroupItemTopic>
        }
      

        if (menu.sub == 0) {

        } else {
            subMenu =
            menu.sub.map((value, idx) => {
                const { name, path } = value
                return (
                    <StyledLink to={path} key={idx}>
                        <StyledListGroupItem color="secondary" action>{name}</StyledListGroupItem>
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

export default NavbarPart