import Left from "../components/left.jsx";
import styled from "styled-components";
import BgImg from "../assets/images/bg2.jpeg";
const AllBox = styled.div`
    background: url(${BgImg}) no-repeat right top;
    background-size:100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
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
    width: 95%;
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
    button{
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
`

const FlexBox = styled.ul`
    margin-top: 20px;
    display: flex;
    align-items: center;
`


export default function Privacy(){
    return <>
        <Left />

        <div className="main-left" id="main">
            <div className="pt-wrapper">
                    <AllBox>
                        <div className="inner">

                            <Box>
                                <LftBox>
                                    <div className="title">
                                        <div className="top">REI Wallet</div>
                                        Privacy Policy
                                    </div>
                                    <div className="btm">
                                        <p>This privacy policy ("Policy") describes how Consensys Software Inc.
                                            ("Company", "we", "our", or "us") collects, uses, shares, and stores
                                            personal information of users of its websites, https://reiwallet.io/ (the
                                            "Sites"). This Policy applies to the Sites, applications, products and
                                            services (collectively, "Services") on or in which it is posted, linked, or
                                            referenced.</p>

                                        <p>By using the Services, you accept the terms of this Policy and our Terms of
                                            Use, and consent to our collection, use, disclosure, and retention of your
                                            information as described in this Policy. If you have not done so already,
                                            please also review our terms of use. The terms of use contain provisions
                                            that limit our liability to you and require you to resolve any dispute with
                                            us on an individual basis and not as part of any class or representative
                                            action. IF YOU DO NOT AGREE WITH ANY PART OF THIS PRIVACY POLICY OR OUR
                                            TERMS OF USE, THEN PLEASE DO NOT USE ANY OF THE SERVICES.</p>

                                        <p>We retain information we collect as long as it is necessary and relevant to
                                            fulfill the purposes outlined in this privacy policy. In addition, we retain
                                            personal information to comply with applicable law where required, prevent
                                            fraud, resolve disputes, troubleshoot problems, assist with any
                                            investigation, enforce our Terms of Use, and other actions permitted by law.
                                            To determine the appropriate retention period for personal information, we
                                            consider the amount, nature, and sensitivity of the personal information,
                                            the potential risk of harm from unauthorized use or disclosure of your
                                            personal information, the purposes for which we process your personal
                                            information and whether we can achieve those purposes through other means,
                                            and the applicable legal requirements.
                                        </p>

                                        <p>
                                            In some circumstances we may anonymize your personal information (so that it
                                            can no longer be associated with you) in which case we may use this
                                            information indefinitely without further notice to you.
                                        </p>

                                        <p>
                                            We employ industry standard security measures designed to protect the
                                            security of all information submitted through the Services. However, the
                                            security of information transmitted through the internet can never be
                                            guaranteed. We are not responsible for any interception or interruption of
                                            any communications through the internet or for changes to or losses of data.
                                            Users of the Services are responsible for maintaining the security of any
                                            password, biometrics, user ID or other form of authentication involved in
                                            obtaining access to password protected or secure areas of any of our digital
                                            services. In order to protect you and your data, we may suspend your use of
                                            any of the Services, without notice, pending an investigation, if any breach
                                            of security is suspected.
                                        </p>
                                    </div>
                                </LftBox>

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
            </div>

        </div>
    </>
}
