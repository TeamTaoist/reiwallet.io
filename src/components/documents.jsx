import styled from "styled-components";
import BgImg from "../assets/images/bg2.jpeg"

const AllBox = styled.div`
    background: url(${BgImg}) no-repeat right top;
    background-size:100% 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .inner{
        flex-grow: 1;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.6);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter:blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Box = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0 5%;
    gap: 30px;
    .shape-square {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #35ab39;
        top: 8%;
        right: 5%;
        opacity: .6;
        border-radius: 3px;
        transform: rotate(45deg);
        transition: all .0s ease-in-out;
        -webkit-animation: rotating 20s linear infinite;
    }

    @-webkit-keyframes rotating {
        from{
            -webkit-transform: rotate(0deg);
        }
        to{
            -webkit-transform: rotate(360deg);
        }
    }

    .shape-triangle {
        position: absolute;
        width: 0;
        height: 0;
        top: 12%;
        left: 45%;
        opacity: .6;
        transform: rotate(-60deg);
        transition: all .0s;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 50px solid #35ab39;
        -webkit-animation: right-to-left 20s linear infinite;
    }

    @-webkit-keyframes right-to-left {
        0% { margin-left: 0;}
        50%{ margin-left : -100px;}
        100%{ margin-left: 0;}
    }

    .shape-plus {
        position: absolute;
        top: 15%;
        left: 13%;
        border-radius: 1px;
        background: #35ab39;
        height: 40px;
        width: 5px;
        opacity: .6;
        transform: rotate(55deg);
        -webkit-animation: rotating 20s linear infinite;
    }

    .shape-plus:after {
        border-radius: 1px;
        background-color: #35ab39;
        content: "";
        height: 5px;
        position: absolute;
        top: 17px;
        width: 40px;
        left: -17px;
    }

    .shape-circle{
        position: absolute;
        bottom: 50px;
        left: 170px;
        width: 60px;
        height: 60px;
        opacity: .6;
        border: 5px solid #35ab39;
        border-radius: 50%;
        -webkit-animation: heartBeat 10s linear infinite;
    }
`
const LftBox = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    padding: 30px 10px;

    background-image: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQoU2N8+vTpfwYGBgZpaWlGEI0LMBKtEJ8pyHJ4rRtVCAAd/QgLwKUsAgAAAABJRU5ErkJggg==)!important;
    background-position: 0 0px!important;
    background-repeat: repeat!important;
    .title{
        font-family: 'Comfortaa', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #46a96a;
        margin-bottom: 20px;
        padding-top: 10px;
        .top{
            font-size: 14px;
            padding-bottom: 10px;
            color: #5f5f65;
            opacity: 0.6;
        }
    }
    .btm{
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }
    a{
        background: #46a96a;
        border: 0;
        border-radius: 20px;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        padding:10px 20px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        
    }
    
`
const UlBox = styled.ul`
    display: flex;
    align-items: stretch;
    gap: 10px;
    li{
        background: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,0.3);
        box-sizing: border-box;
        padding:30px 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        cursor: pointer;
        &:hover{
            background: #46a96a;
            .titleBox,.desc{
                color: #fff;
            }
        }
    }
    .titleBox{
        font-family: 'Comfortaa', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #46a96a;
        margin-bottom: 20px;
    }
    .icon{
        font-size:30px;
        font-weight: 700;
        color: #46a96a;
    }
    .iconBox{
        background: #f5f5f5;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        text-align: center;
        margin-top: 30px;
    }
    .flexLine{
        display: flex;
        align-items: flex-end;
        gap:20px;
        a{
            margin-bottom: 10px;
            cursor: pointer;
            text-transform: capitalize;
        }
    }
`

const FlexBox = styled.ul`
    margin-top: 20px;
    display: flex;
    align-items: center;
`

export default function Documents() {
    return <AllBox>
        <div className="inner">


        <Box>
            <LftBox>
                <div className="title">
                    <div className="top">Integrate dapps with the</div>
                    REI Wallet
                </div>
                <div className="btm">Your dapp can use the API to request users' CKB wallets, read data
                    from connected
                    blockchains, suggest that the user sign messages and transactions, and perform other functions on
                    REI Wallet from multiple dapp platforms.
                </div>
                <a href="https://docs.reiwallet.io/" target="_blank" rel="noreferrer">Let's start  &gt;</a>
            </LftBox>
            <UlBox>
                <li>
                    <div>
                        <div className="titleBox">Quickstart</div>
                        <div className="desc">Get started quickly by connecting your React dapp to REI Wallet in your
                            users'
                            browsers.
                        </div>
                    </div>
                    <div className="flexLine">
                        <div className="iconBox">
                            <i className="flaticon-081-electricity icon"></i>
                        </div>
                        <a href="https://demo-app.reiwallet.io/" target="_blank" rel="noreferrer">demo-app.reiwallet.io</a>
                    </div>


                </li>
                <li>
                    <div>
                        <div className="titleBox">Tutorials</div>
                        <div className="desc">Follow the step-by-step tutorials to create a simple React dapp and integrate it with
                            REI Wallet.
                        </div>
                    </div>
                    <div className="iconBox">
                        <i className="flaticon-120-coffee icon"></i>
                    </div>

                </li>
                <li>
                    <div>
                        <div className="titleBox">API</div>
                        <div className="desc">Use the JSON-RPC methods of REI Wallet API to interact with your users.
                        </div>
                    </div>
                    <div className="iconBox">
                        <i className="flaticon-130-browser icon"></i>
                    </div>

                </li>
            </UlBox>
            <span className="shape-square"></span>
            <span className="shape-triangle"></span>
            <span className="shape-plus"></span>
            <span className="shape-circle"></span>
        </Box>
        <FlexBox>
            <li>
                <img src="" alt=""/>
            </li>
        </FlexBox>
        </div>
    </AllBox>
}
