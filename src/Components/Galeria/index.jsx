import React from 'react';
import styled from 'styled-components';

const Galeria = ({ videos = [], onDelete, onSeleccionarVideo }) => {
  return (
    <GalleryContainer>
      {videos.map(video => (
        <VideoCard key={video.id}>
          <img src={video.imagen} alt={video.titulo} />
          <p>{video.titulo}</p>
          <ButtonContainer>
            <Button onClick={() => onSeleccionarVideo(video)}>Editar</Button>
            <Button onClick={() => onDelete(video.id)}>Borrar</Button>
          </ButtonContainer>
        </VideoCard>
      ))}
    </GalleryContainer>
  );
};

export default Galeria;

const GalleryContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 10px;
  background-color: #2b2a2a;
  border-radius: 8px;
  color: #fff;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
