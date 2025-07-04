import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: #005390;
  color: white;
  border: 0;
  padding: 0.8rem 3rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 1rem;
  width:fit-content;

  &:hover {
    background:green;
  }
  border-radius: 5px;
`;

function Button({ children }) {
    return (
        <Btn>{children}</Btn>
    )
}
export default Button;
