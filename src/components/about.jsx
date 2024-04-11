import styled from "styled-components";
import AboutImg from "../assets/images/about.jpg";
import Icon1 from "../assets/images/icon-1.svg";
import Icon2 from "../assets/images/icon-2.svg";
import Icon3 from "../assets/images/icon-5.svg";

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

const LftBox = styled.div`
    padding-left: 5vw;
    img{
        width: 30vw;   
    }
`

const RhtBox = styled.div`
    flex-grow: 1;
    max-width: 50vw ;
`

const TitleBox = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #46a96a;
    text-transform: capitalize;
    font-family: 'Comfortaa', sans-serif;
`

const UlBox = styled.div`
    width: 100%;
    dl{
        background: rgba(250,250,250);
        padding: 20px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        gap: 30px;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 30px;
    }
    img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    .title{
        font-weight: bold;
        font-size: 16px;
    }
    .desc{
        font-size: 14px;
        margin-top: 10px;
    }
`

export default function About(){
    return <Box>
        <LftBox>
            <img src={AboutImg} alt=""/>
        </LftBox>
        <RhtBox>
            <TitleBox>Our Advantage</TitleBox>
            <UlBox>
                <dl>
                    <dt>
                        <img src={Icon1} alt=""/>
                    </dt>
                    <dd>
                        <div className="title">Buy, store, send and swap tokens</div>
                        <div className="desc">Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange—everything you need to manage your digital assets.</div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src={Icon2} alt=""/>
                    </dt>
                    <dd>
                        <div className="title">Explore blockchain apps</div>
                        <div className="desc">MetaMask provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.</div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src={Icon3} alt=""/>
                    </dt>
                    <dd>
                        <div className="title">Own your data</div>
                        <div className="desc">MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.</div>
                    </dd>
                </dl>
            </UlBox>
        </RhtBox>
    </Box>
}
