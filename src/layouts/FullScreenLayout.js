import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

class FullScreenLayout extends Component {
    render() {
        const Main = styled.main`
            min-height: 100vh;
        `

        const MainClass = classNames({
            'd-flex': this.props.middlePosition,
            'align-items-center': this.props.middlePosition,
            'justify-content-center': this.props.middlePosition,
            'flex-column': this.props.middlePosition
        });

        return (
            <Fragment>
                <Main className={MainClass}>
                    {this.props.main}
                </Main>
            </Fragment>
        );
    }
}

export default FullScreenLayout;
