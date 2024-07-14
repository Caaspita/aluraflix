
// Upload.jsx
import React, { useState } from 'react';
import FormComponent from '../Components/FormComponent'; // Importa el componente de formulario
import styled from 'styled-components';

const ContenedorUpload = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  background-color: var(--Negro);
  h2{
    margin:0;
    color:var(--Celeste);
  }
`

const Upload = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    videoUrl: '',
    descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      titulo: '',
      categoria: '',
      imagen: '',
      videoUrl: '',
      descripcion: ''
    });
  };

  return (
    <ContenedorUpload>
      <h2>Subir nuevo video</h2>
      <FormComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </ContenedorUpload>
  );
};

export default Upload;
