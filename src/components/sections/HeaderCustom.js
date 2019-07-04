import React, { Component, Fragment } from 'react';
import { Divider } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PositionFelx = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 40px;
`

const HeaderStyle = styled.header`
   background-color: #fff;
   width: 100%;
   z-index:1;  
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
        let className
        if(this.props.fixed){
            className = this.state.fixed ? "header-fixed" : ""
        }
        return (
            <Fragment>
            <HeaderStyle className={className}>
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
            {this.state.fixed && this.props.fixed ? <div style={{height:90,width:'100%',}} /> : null}
            </Fragment>
        )
    }
}

HeaderCustom.propTypes = {
    topic: PropTypes.string.isRequired,
    description: PropTypes.string,
    fixed: PropTypes.bool
}

HeaderCustom.defaultProps = {
    fixed: false
}

export default HeaderCustom