import styled from "styled-components";
import LogoImg from "../assets/images/logo.png";

const Box = styled.header`
    font-family: 'Comfortaa', sans-serif;
    .pt-trigger{
        padding: 30px 0;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f1f1f1;
        img {
            width: 60px;
        }
    }

`
export default function Left(){
    return <Box className="header-left">
        <a className="logo" href="">
            <img src={LogoImg} alt=""/>
        </a>
        <div className="site-nav">


            <ul className="site-main-menu alt-font" id="nav">
                <li>
                    <a className="pt-trigger" data-animation="58" data-goto="1" href="#home">
                        <i className="flaticon-075-earth-globe"></i>

                        <span>Home</span>
                    </a>
                </li>
    <li>
        <a className="pt-trigger" data-animation="59" data-goto="2" href="#about">
            <i className="flaticon-034-app"></i>
            <span>About</span>
        </a>
    </li>
                <li>
                <a className="pt-trigger" data-animation="61" data-goto="3" href="#services">
                    <i className="flaticon-013-book"></i>
                        <span>How To</span></a>
                </li>
                {/*<li>*/}
                {/*    <a className="pt-trigger" data-animation="59" data-goto="4" href="#portfolio">*/}
                {/*        <i className="flaticon-018-pen"></i>*/}
                {/*        <span>Learn</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a className="pt-trigger" data-animation="58" data-goto="5" href="#clients">*/}
                {/*        <i className="flaticon-024-cloud-computing"></i>*/}
                {/*        <span>Client</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a className="pt-trigger" data-animation="61" data-goto="6" href="#contact">*/}
                {/*        <i className="flaticon-046-chat"></i>*/}
                {/*        <span>Contact</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>


        </div>

    </Box>
}
