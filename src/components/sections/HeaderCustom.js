import React, { Component, Fragment } from 'react';
import { Divider } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PositionFelx = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    height: 90px;
`

const HeaderStyle = styled.header`
   background-color: #fff;
   width: 100%;
   z-index:2;  
`

const ChildrenStyle = styled.div`
    padding: 10px 80px 0 80px;
`

class HeaderCustom extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)

        this.state = {
            fixed: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        if (window.scrollY >= 63) {
            this.setState({
                fixed: true
            })
        } else {
            this.setState({
                fixed: false
            })
        }
    }
    render() {
        let { topic, description, fixed, headerRight, children, childrenHeight, hideChildenInSize } = this.props
        let className
        if (fixed) {
            className = this.state.fixed ? "header-fixed" : ""
        }
        return (
            <Fragment>
                <HeaderStyle className={className}>
                    <PositionFelx className="header-padding">
                        <div className="text-left font-size-header">
                            <div style={{ color: "#464545"}} id="topic">
                                {topic.length > 41 ? `${topic.slice(0,40)}...` : topic}
                            </div>
                            <div style={{ color: "#707070" }} id="description">
                                {description}
                            </div>
                        </div>
                        <div className="hidden-xs hidden-sm">
                            {headerRight}
                        </div>
                    </PositionFelx>
                    <Divider style={{ margin: 0 }} />
                    <ChildrenStyle className={hideChildenInSize}>
                        {children}
                    </ChildrenStyle>
                </HeaderStyle>
                {this.state.fixed && fixed ?
                    <div style={{ height: 90, width: '100%', }}/>
                    : null
                }
                {this.state.fixed && fixed ?
                    <div style={{ height: childrenHeight+10, width: '100%', }} className={hideChildenInSize}/>
                    : null
                }
        
            </Fragment>
        )
    }
}

HeaderCustom.propTypes = {
    topic: PropTypes.string.isRequired,
    description: PropTypes.string,
    fixed: PropTypes.bool,
    headerRight: PropTypes.element,
    children: PropTypes.element,
    childrenHeight: PropTypes.number,
    hideChildenInSize: PropTypes.string
}

HeaderCustom.defaultProps = {
    fixed: false,
    childrenHeight: 0
}

export default HeaderCustom