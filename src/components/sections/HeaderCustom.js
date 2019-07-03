import React, { Component } from 'react';
import { Divider } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PositionFelx = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
`

const HeaderStyle = styled.header`
   background-color: #fff;
   width: 100%;
   z-index:1;  
   /* top: 0;
   position: ${props => props.fixed ? 'sticky' : 'static'}; */
`

class HeaderCustom extends Component {
    render() {
        return (
            <HeaderStyle>
                <PositionFelx>
                    <div>
                        <div style={{ fontSize: 20, color: "#464545" }}>
                            {this.props.topic}
                        </div>
                        <div style={{ fontSize: 12, color: "#707070" }}>
                            {this.props.description}
                        </div>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </PositionFelx>
                <Divider style={{ margin: 0 }} />
            </HeaderStyle>

        )
    }
}

HeaderCustom.propTypes = {
    topic: PropTypes.string.isRequired,
    description: PropTypes.string,
    fixed: PropTypes.bool.isRequired
}

HeaderCustom.defaultProps = {
    fixed: false
}

export default HeaderCustom