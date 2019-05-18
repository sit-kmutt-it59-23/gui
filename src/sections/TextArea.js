import React, { Fragment } from 'react';
import styled from 'styled-components';

const TextBold = styled.p`
    font-weight : bold;
    display: inline;
`
const TextAreaSize = styled.textarea`
    border-radius:10px;
    border-color:#707070;
    min-height:150px;
`

const TextArea = (props) => {
    return (
        <Fragment>
            <TextBold>{props.header}</TextBold>
            <span> {props.description ? `(${props.description})` : ''}</span>
            <TextBold> : </TextBold>
            <TextAreaSize className="form-control mt-2" type="textarea" height="100" />
        </Fragment>
    )
}

export default TextArea