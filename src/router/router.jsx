import React from 'react';
import {Route,Routes,Navigate} from "react-router-dom";
import Privacy from '../pages/privacy.jsx';
import HomePage from "../pages/home.jsx";


function RouterLink() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/privacy" element={<Privacy />}/>
            <Route path="/home" element={<HomePage />}/>
        </Routes>
   );
}

export default RouterLink;
