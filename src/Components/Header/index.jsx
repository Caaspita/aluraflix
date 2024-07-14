import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const HeaderEstilizado = styled.div`
    position:fixed;
    background-color: #262626;
    height: 125px;
    display: flex;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 35px;
    border-bottom: solid 2px #2271D1;
    box-shadow: 0px 5px 29px #2271d1c0;
    img{
        height: 40px;
    }
    div{
        display: flex;
        gap: 25px;
    }
`

const Btn = styled.button`
    width:180px;
    height:40px;
    background: transparent;
    border: solid 2px #f5f5f5;
    border-radius: 15px;
    text-transform:uppercase;
    color: #f5f5f5;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        border: solid 2px #2271D1;
        box-shadow: inset 0px 0px 12px 1px #2271D1;
        background-color: rgba(0,0,0,.9);
    }
`


const Header = () => {

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }

    const navigateUpload = () => {
        navigate('/upload')
      };


    return <>
        <HeaderEstilizado>
            <img src="./public/Logo.svg" alt="Logo" />
            <div>
                <Btn onClick={navigateHome}>Home</Btn>
                <Btn onClick={navigateUpload}>Nuevo video</Btn>
            </div>
        </HeaderEstilizado>
    </>
}

export default Header