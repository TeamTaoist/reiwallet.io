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
            <TitleBox>Our Advantages</TitleBox>
            <UlBox>
                <dl>
                    <dt>
                        <img src={Icon1} alt=""/>
                    </dt>
                    <dd>
                        <div className="title">Manage xUDT and DOBs</div>
                        <div className="desc">As a browser extension, REI Wallet secures your login, manages your xUDT and trade your DOBs.</div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src={Icon2} alt=""/>
                    </dt>
                    <dd>
                        <div className="title">Native Support</div>
                        <div className="desc">REI Wallet is the only native Nervos CKB Chrome Extension wallet currently. It's your choice!</div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src={Icon3} alt=""/>
                    </dt>
                    <dd>
                        <div className="title">Explore the Bitcoin L2 world</div>
                        <div className="desc">RGB++ Protocol is integrated, all the UTXO chains will be supported as Bitcoin Layer2.</div>
                    </dd>
                </dl>
            </UlBox>
        </RhtBox>
    </Box>
}
