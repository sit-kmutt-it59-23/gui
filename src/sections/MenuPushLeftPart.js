import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PartMenu = styled.div`
    wifth:100%;
    padding:10px 20px;
    font-size:12px;
    display: grid;
    align-items: center;
    background-color : ${props => props.inputColor};
`
const FontAwesomeIconInline = styled(FontAwesomeIcon)`
    display:lnline;
    font-size:12px
`
const StyledLink = styled(Link)`
    color: #000000;
    
    &:focus, &:hover, &:visited, &:link,&:active {
        text-decoration: none;
        color: #000000;
    }
`

class MenuPushLeftPart extends Component {
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

        if (menu.sub.length !== 0) { // have sub menu
            topic = <div className="d-flex justify-content-between">
                        <span >
                            {menu.topic}
                        </span>
                        <FontAwesomeIconInline icon="sort-down" />
                    </div>
        } else { // not have sub menu
            topic = <StyledLink to={menu.topic_path}>
                        <div className="d-flex justify-content-between">
                            <span >
                                {menu.topic}
                            </span>
                        </div>
                    </StyledLink>
        }
    
        if (menu.sub.length !== 0) { // have sub menu
            subMenu =
            menu.sub.map((value, idx) => {
                const { name, path } = value
                return (
                    <StyledLink to={path} key={idx}>
                        <PartMenu inputColor="#ffa674" className="pl-4">
                            {name}
                        </PartMenu>
                    </StyledLink >
                )
            })
        } 
        return (
            <Fragment>
                <PartMenu onClick={this.toggle} inputColor="#ff8c4c">
                    {topic}     
                </PartMenu>
                <Collapse isOpen={this.state.isOpen}>
                    {subMenu}
                </Collapse>
            </Fragment>
        )
    }
}

export default MenuPushLeftPart