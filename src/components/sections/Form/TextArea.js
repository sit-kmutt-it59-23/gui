import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'


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
            <TextAreaSize name={props.name} className="form-control mt-1 mb-4" />
        </Fragment>
    )
}

TextArea.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string
}

export default TextArea