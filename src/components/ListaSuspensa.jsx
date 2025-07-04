import React from 'react';
import styled from 'styled-components';

const Select= styled.select`
    border:0;
    background:white;
    color:gray;
    padding: 0 .3rem;
    border-radius: 5px;
    height:45px;
    margin:.5rem 0 0 0;
`;

function ListaSuspensa({ times, label }) {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <Select>
                {times.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </Select>
        </>
    );
}
export default ListaSuspensa;

