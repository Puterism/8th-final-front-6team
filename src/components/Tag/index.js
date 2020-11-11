import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
    return (
        <Tag>{text}</Tag>
    )
}

const Tag = styled.div`
    font-size: 12px;
    color: #2699fb;
    padding: 8px 13px;
    background-color: #f1f9ff;
    border-radius: 4px;
    border: solid 3px #bce0fd;
    margin-right: 10px;
    text-align: center;
`;