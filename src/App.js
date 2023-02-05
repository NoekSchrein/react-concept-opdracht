import './App.css';
import Nav from "./components/Nav";
import React from "react";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Subreddit from "./pages/Subreddit/Subreddit";

function App() {
    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:id" element={<Subreddit/>}/>
            </Routes>
            <footer>
                <div className="inner-content-container">
                    In opdracht van NOVI Hogeschool © 2022
                </div>
            </footer>
        </div>
    );
}

export default App;
