import styled from "styled-components";
import Twitter from "../assets/images/Twitter.png";
import Discord from "../assets/images/Discord.png";
import Telegram from "../assets/images/Telegram.png";
import Medium from "../assets/images/Medium.png";

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const TitleBox = styled.div`
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #46a96a;
    text-transform: capitalize;
    font-family: 'Comfortaa', sans-serif;
`

const TipsBox = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    width: 35vw;
    text-align: center;
    line-height: 1.5;
    color: #41464b;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-family: 'Comfortaa', sans-serif;
    margin-top: 20px;
    font-weight: bold;
`

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        width: 25px;
        cursor: pointer;
    }
`
const BtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 60px;
    button{
        padding: 20px 40px;
        border-radius: 40px;
        border: 0;
        font-family: 'Comfortaa', sans-serif;
        box-shadow: 0 7px 25px rgb(41 41 41 / 27%);
    }
    .download{
        background: #46a96a;
        color: #fff;
    }
    .start{
        background: #fff;
        color: #46a96a;
    }
`


export default function Home(){
    return <Box>
        <TitleBox>REI Wallet </TitleBox>
        <TipsBox>With REI Wallet installed, start enjoying the convenience of tracking and managing your web3 everything, all in one place.</TipsBox>
        <FlexBox>
            <img src={Twitter} alt=""/>
            <img src={Discord} alt=""/>
            <img src={Telegram} alt=""/>
            <img src={Medium} alt=""/>
        </FlexBox>
        <BtnGroup>
            <button className="start">Get Started</button>
            <button className="download">Download</button>
        </BtnGroup>
    </Box>
}
