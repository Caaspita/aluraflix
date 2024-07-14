import styled from "styled-components"

const BannerEstilizado = styled.header`
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-height:832px;
    background-image: url("/img/Banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    img{
        border-radius: 15px;
        width:100%;
        box-shadow: inset 0px 0px 29px red;
        border: solid 2px var(--Celeste);
        max-width:650px;
    }
`
const DescripcionBanner = styled.div`
    display: inline-block;
    color: #f5f5f5;
    width: 100%;
    max-width: 660px;
    margin-left: 35px;
    span{
        background-color: var(--Celeste);
        font-size:48px;
        font-weight: bold;
        border-radius: 15px;
        padding: 5px 15px;
        text-transform: uppercase;
    }
    h2{
        font-size:46px;
    }

`

const Banner = () => {
    return <>
        <BannerEstilizado>
            <DescripcionBanner>
                <span>Front end</span>
                <h2>Challenge React</h2>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </DescripcionBanner>
            <figure>
                <img src="./img/player.png" alt="Player banner" />
            </figure>
            
        </BannerEstilizado>
    </>
}

export default Banner