import React, { Component, Fragment } from 'react';
import { ListGroupItem, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { inferToggle, offerToggle, aboutClubToggle} from '../../../redux/sidebar'

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
    border-radius:0px;  
    font-size:12px;
    padding: 10px 10px 10px 20px;

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
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        const { dispatch, type } = this.props
        switch ( type ) {
            case 'infer':
                dispatch(inferToggle()) 
                break
            case 'offer':
                dispatch(offerToggle()) 
                break
            case 'aboutclub':
                dispatch(aboutClubToggle()) 
                break    
            default:
                break
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.menu.sub.length === 0 
                    ? (
                        <StyledLink to={this.props.menu.topic_path} className="d-none d-md-block">
                            <StyledListGroupItemTopic action color="dark">{this.props.menu.topic}</StyledListGroupItemTopic>
                        </StyledLink>
                    )
                    : (
                        <StyledListGroupItemTopic onClick={this.toggle} action className="d-none d-md-block list-group-item-dark">
                            <span className="float-left">{this.props.menu.topic}</span>
                            <FontAwesomeIcon icon="sort-down"  className="float-right d-none d-lg-block" />
                        </StyledListGroupItemTopic>
                    )
                }
                <Collapse isOpen={this.props.isOpen}>
                    {this.props.menu.sub.length !== 0
                        ? (
                            <Fragment>
                                {this.props.menu.sub.map(({ name, path }, idx) => (
                                    <StyledLink to={path} key={idx}>
                                        <StyledListGroupItem color="secondary" className="text-left d-none d-md-block" action>{name}</StyledListGroupItem>
                                    </StyledLink>
                                ))}
                            </Fragment>
                        )
                        : null
                    }
                </Collapse>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    link_active: state.sidebar.link_active,
})

SidebarPart.propTypes = {
    menu: PropTypes.object,
    isOpen: PropTypes.bool,
    type: PropTypes.string
}

export default  connect(mapStateToProps)(SidebarPart)