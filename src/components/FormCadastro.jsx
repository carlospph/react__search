import React from 'react';
import FieldText from './FieldText';
import styled from 'styled-components';
import ListaSuspensa from './ListaSuspensa';
import Button from './Button';

const FormContainer = styled.form`
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
  const times = [
    'Designers',
    'Analistas dev',
    'Desenvolvedores',
    'Suporte técnico'];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('Formulário enviado');
  };

  return (
    <FormContainer onSubmit={aoSalvar}>

      <FieldText label="Nome completo"
        name="nome"
        placeholder="Nome completo"
        obrigatorio={true} />

      <FieldText label="Cargo"
        name="cargo"
        placeholder="Cargo"
        obrigatorio={true} />

      <FieldText label="Endereço da imagem"
        name="enderecoImagem"
        placeholder="Endereço da imagem (opcional)"
        obrigatorio={true} />


      <ListaSuspensa times={times} label="Times" />
      <Button>Criar card</Button>
    </FormContainer>
  );
}

export default FormCadastro;