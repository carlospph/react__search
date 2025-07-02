// src/components/FormularioCadastro.jsx (ou .js)
import React from 'react';
import FieldText from './FieldText'; // Certifique-se de que o caminho está correto
import styled from 'styled-components';

const FormContainer = styled.div`
  background: #f2f2f2;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  padding: 1rem 1rem 2rem;
  max-width: 540px;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

function FormCadastro() {
  const Nomecompleto = "Nome Completo";
  const Cargo = "Cargo";
  const Endereco = "Endereço Completo";

  return (
    <FormContainer>
      <FieldText campo={Nomecompleto} />
      <FieldText campo={Cargo} />
      <FieldText campo={Endereco} />
    </FormContainer>
  );
}

export default FormCadastro;