// Modal.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormComponent from '../FormComponent'; // Importa el nuevo componente de formulario

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 60px;
  height: 100%;
  max-height: 750px;
  width: 100%;
  max-width: 630px;
  border-radius: 25px;
  border: solid 4px var(--Celeste);
  background-color: #03122F;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: var(--Celeste);
    font-size: 38px;
  }
`;

const Cerrar = styled.button`
  position: absolute;
  background-color: transparent;
  top: 25px;
  right: 25px;
  height: 48px;
  border: none;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
`;

const Modal = ({ video, alCerrar }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    videoUrl: '',
    descripcion: ''
  });

  useEffect(() => {
    if (video) {
      setFormData({
        titulo: video.titulo || '',
        categoria: video.categoria || '',
        imagen: video.imagen || '',
        videoUrl: video.videoUrl || '',
        descripcion: video.descripcion || ''
      });
    } else {
      setFormData({
        titulo: '',
        categoria: '',
        imagen: '',
        videoUrl: '',
        descripcion: ''
      });
    }
  }, [video]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
    <>
      {video && (
        <>
          <OverLay />
          <DialogEstilizado open={!!video}>
            <h2>Editar card</h2>
            <FormComponent
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
            />
            <Cerrar onClick={alCerrar}>
              <img src="./public/img/cancel.png" alt="" />
            </Cerrar>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default Modal;
