import React, { useState } from 'react';

import {
  Grid,
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  CheckboxLabel,
  SubmitButton,
} from '../styles/Fomulario.js';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    rg: '',
    cpf: '',
    contaBancaria: '',
    possuiEmpresa: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Grid>
      <FormContainer>
        <FormTitle>Contrato de Compra</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome:</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="endereco">Endereço:</Label>
            <Input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="rg">RG:</Label>
            <Input
              type="text"
              id="rg"
              name="rg"
              value={formData.rg}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cpf">CPF:</Label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="contaBancaria">Conta Bancária:</Label>
            <Input
              type="text"
              id="contaBancaria"
              name="contaBancaria"
              value={formData.contaBancaria}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <CheckboxLabel>
            <Input
              type="checkbox"
              id="possuiEmpresa"
              name="possuiEmpresa"
              checked={formData.possuiEmpresa}
              onChange={handleChange}
            />
            Possui Empresa
          </CheckboxLabel>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </form>
      </FormContainer>
    </Grid>
  );
};

export default Formulario;
