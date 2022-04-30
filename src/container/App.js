import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Load } from "../components/Load";
import { AppRouter } from '../routers/AppRouter';

function App() {
    const [loading, setLoading] = useState("true");

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
       
    if (loading) {
        return (
            <div className="App">
                <Load />
            </div>
        );
    } else {
        return (
            <div className="App">
                <AppRouter />
            </div> 
        );
    }
}

export default App;