import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Formulario } from '../components/Formulario';
import Html from '../components/html';
import Css from '../components/css';
import Js from '../components/js';
import Figma from '../components/figma';
import Ux from '../components/ux';
import { Menu } from '../components/menu';
import { Registrarse } from '../components/Registrarse';

export const AppRouter = () => {
    return (
        <Router>
            
            <Routes>
                <Route path='/' element={<Formulario/>} />
                <Route exact path="/regitro" element={<Registrarse />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/html" element={<Html />} />
                <Route exact path="/css" element={<Css />} />
                <Route exact path="/js" element={<Js />} />
                <Route exact path="/figma" element={<Figma />} />
                <Route exact path="/ux" element={<Ux />} />
            </Routes>
        </Router>
    )
}
