import React, { useState } from 'react';
import Banner from '../Components/Banner';
import styled from 'styled-components';
import videos from '../videos.json';
import Galeria from '../Components/Galeria';
import Modal from '../Components/Modal';

const Home = () => {
    const [videosDeGaleria, setVideosDeGaleria] = useState(Array.isArray(videos) ? videos : []);
    const categorias = ["Front End", "BackEnd", "Innovacion y Gestion"];
    const [videoSeleccionado, setFotoSeleccionada] = useState(null)

  
    const handleDelete = (id) => {
      setVideosDeGaleria(videosDeGaleria.filter(video => video.id !== id));
    };
  
    return ( <>
        <Banner />
        <Container>
            {categorias.map(categoria => {
                const CategoryStyledSection = getCategoryStyledSection(categoria);
                return (
                    <CategoryStyledSection key={categoria}>
                        <h2>{categoria}</h2>
                        <Galeria videos={videosDeGaleria.filter(video => video.categoria === categoria)} 
                            onDelete={handleDelete}
                            onSeleccionarVideo={video=>setFotoSeleccionada(video)}
                        />
                    </CategoryStyledSection>
                );
            })}
        </Container>
        <Modal video={videoSeleccionado} alCerrar={()=>setFotoSeleccionada(null)}/>
    </>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--Negro);
    padding: 20px;
`;

const CategorySection = styled.div`
    margin-top:40px;
    color: #fff;
`;

// Define estilos específicos para cada categoría
const FrontEndSection = styled(CategorySection)`
  border-radius: 8px;
  border: solid 2px var(--Celeste);
  h2{
      background-color: var(--Celeste);
      padding: 10px;
      margin-top:0;
  }
`;

const BackEndSection = styled(CategorySection)`
  border-radius: 8px;
  border: solid 2px var(--Verde);
  h2{
    background-color: var(--Verde);
    padding: 10px;
    margin-top:0;
  }
`;

const InnovationSection = styled(CategorySection)`
  border-radius: 8px;
  border: solid 2px var(--Amarillo);
  h2{
    background-color: var(--Amarillo);
    padding: 10px;
    margin-top:0;
  }
`;

// Función para obtener el componente estilizado correcto basado en la categoría
const getCategoryStyledSection = (categoria) => {
    switch (categoria) {
        case "Front End":
            return FrontEndSection;
        case "BackEnd":
            return BackEndSection;
        case "Innovacion y Gestion":
            return InnovationSection;
        default:
            return CategorySection; // Fallback to a default styled section
    }
};
