import React, { Component } from 'react';
import styled from 'styled-components';

const MarginTopBottom100 = styled.div`
   margin: 120px 0 120px 0;
`

class ClubName extends Component {
    render() {
        return (
            <MarginTopBottom100>
                <h3 className="text-center">สโมสรนักศึกษาคณะเทคโนโลยีสารสนเทศ</h3>
            </MarginTopBottom100>
        );
    }
}

export default ClubName