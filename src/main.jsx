import React from "react";
import ReactDOM  from "react-dom/client";

function App() {
    return (
        <div className="container">
            <h1>Hola Mundo</h1>
            <h2>Esto es un h2</h2>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);  