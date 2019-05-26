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
    const {header,description,name} = props
    return (
        <Fragment>
            <TextBold>{header}</TextBold>
            <span> {description ? `(${description})` : ''}</span>
            <TextBold> : </TextBold>
            <TextAreaSize name={name} className="form-control mt-1 mb-4" />
        </Fragment>
    )
}

export default TextArea