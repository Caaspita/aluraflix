// FormComponent.jsx
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--Celeste);
  gap: 25px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input,
  textarea {
    width: 550px;
    height: 30px;
    border-radius: 10px;
    border: solid 2px var(--Celeste);
    padding: 8px;
    font-size: 16px;
    background-color:transparent;
    color:#fff;
  }

  select {
    width: 550px;
    height: 50px;
    border-radius: 10px;
    border: solid 2px var(--Celeste);
    padding: 8px;
    font-size: 16px;
    background-color:transparent;
    color:#fff;
  }
  option{
    color: #000;
  }

  .input-descripcion {
    height: 80px;
  }
`;

const CajaBotones = styled.div`
  display: flex;
  gap: 25px;

  button {
    height: 40px;
    max-width: 180px;
    width: 100%;
    border-radius: 10px;
    border: solid 2px var(--Celeste);
    font-weight: bold;
    color: var(--Celeste);
    background-color: transparent;
    text-transform: uppercase;

    &:hover {
      background-color: var(--Celeste);
      color: var(--Negro);
    }
  }
`;

const FormComponent = ({ formData, handleInputChange, handleSubmit, handleReset }) => (

    <Form onSubmit={handleSubmit}>
      <div>
        <label>Titulo</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Categoria</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleInputChange}
        >
          <option value="Front End">Front End</option>
          <option value="BackEnd">BackEnd</option>
          <option value="Innovacion y Gestion">Innovacion y Gestion</option>
        </select>
      </div>
      <div>
        <label>Imagen</label>
        <input
          type="text"
          name="imagen"
          value={formData.imagen}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Video</label>
        <input
          type="text"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Descripcion</label>
        <textarea
          className="input-descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
        />
      </div>

      <CajaBotones>
        <button type="submit">Ok</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
      </CajaBotones>
    </Form>
);

export default FormComponent;
