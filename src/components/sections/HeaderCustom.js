import React, { Component, Fragment } from 'react';
import { Divider, Affix } from 'antd'
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
    render() {
        let { topic, description, fixed, headerRight, children, hideChildenInSize } = this.props

        return (
            <Fragment>
                {fixed ?
                    <Affix>
                        <HeaderStyle>
                            <PositionFelx className="header-padding">
                                <div className="text-left font-size-header">
                                    <div style={{ color: "#464545" }} id="topic">
                                        {topic.length > 41 ? `${topic.slice(0, 40)}...` : topic}
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
                    </Affix>
                :
                    <HeaderStyle>
                        <PositionFelx className="header-padding">
                            <div className="text-left font-size-header">
                                <div style={{ color: "#464545" }} id="topic">
                                    {topic.length > 41 ? `${topic.slice(0, 40)}...` : topic}
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
    hideChildenInSize: PropTypes.string
}

HeaderCustom.defaultProps = {
    fixed: false,
}

export default HeaderCustom