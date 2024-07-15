import styled from "styled-components";
import Twitter from "../assets/images/Twitter.png";
import Discord from "../assets/images/Discord.png";
import Telegram from "../assets/images/Telegram.png";
import Medium from "../assets/images/Medium.png";
import BgVideo from "../assets/images/bg.mp4";
import BgImg from "../assets/images/bg-jpg.png";
import React, {  lazy } from 'react';
// const BgVideo = lazy(() => import('../assets/images/bg.mp4'));

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow:hidden ;
    .inner{
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        z-index: 999;
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }
    video{
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`

const BgBox = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 50px;
    border-radius: 10px;
    
`

const TitleBox = styled.div`
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #46a96a;
    text-transform: capitalize;
    font-family: 'Comfortaa', sans-serif;
    text-align: center;
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
    a{
        padding: 0;
        margin: 0;
        border: 0;
    }
`
const BtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;
    button,a{
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
            <video autoPlay muted loop poster={BgImg} id="myVideo" preload="none">
                <source src={BgVideo} type="video/mp4"/>
            </video>

        <div className="inner">
            <BgBox>
                <TitleBox>REI Wallet </TitleBox>
                <TipsBox>With REI Wallet installed, start enjoying the convenience of tracking and managing all your CKB assets
                    in one place.</TipsBox>
                <FlexBox>
                    {/* <a href="#home"><img src={Twitter} alt=""/></a>
                    <a href="#home"><img src={Discord} alt=""/></a> */}
                    <a href="https://t.me/reiwallet" target="_blank"><img src={Telegram} alt=""/></a>
                    {/* <a href="#home"><img src={Medium} alt=""/></a> */}
                </FlexBox>
                <BtnGroup>
                        <a className="start" href="https://docs.reiwallet.io/" target="_blank" rel="noreferrer">Get Started</a>

                    <a className="download" href="https://chromewebstore.google.com/detail/rei-wallet/jacbgghlojlggfgljfhhlcddicacmbek?utm_source=officialsite&utm_medium=cpc&utm_campaign=default_campaign" target="_blank" rel="noreferrer">Download Chrome Extension</a>
                </BtnGroup>
            </BgBox>

        </div>
    </Box>
}
