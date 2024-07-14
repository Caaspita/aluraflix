import styled from "styled-components"

const FooterEstilizado = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    background-color:var(--Negro);
    border-top: solid 2px var(--Azul);
    box-shadow: 0px -5px 29px var(--Azul);
    img{
        height: 40px;
    }
`


const Footer = () => {
    return <>
        <FooterEstilizado>
            <img src="./public/Logo.svg" alt="Logo" />
        </FooterEstilizado>
    </>
}

export default Footer 