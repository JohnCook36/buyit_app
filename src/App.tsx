import React from 'react';
import './App.css';
import {MainRouter} from "./router";
import {FontProvider, ThemeProvider} from "./providers";

function App() {


    return (
        <FontProvider>
            <ThemeProvider>
                <MainRouter/>
            </ThemeProvider>
        </FontProvider>
    );
}

export default App;
