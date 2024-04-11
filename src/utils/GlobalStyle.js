import { createGlobalStyle } from "styled-components";
import "../assets/css/font.css";
import "../assets/css/font2.css";
import "../assets/css/flaticon.css";

const GlobalStyle = createGlobalStyle`
  body,html {
    background-color: #f5f5f5;
    color: #5f5f65;
  }
  li,ul,a,dl,dt,dd{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  
  a{
      text-decoration: none;
      color: #5f5f65;
  }
  i{
      font-family: "Flaticon";
      font-style: normal;
  }
  
  .pt-page{
      box-sizing: border-box;
      background: #fff;
      padding-left:80px;
  }
`;



export default GlobalStyle;
