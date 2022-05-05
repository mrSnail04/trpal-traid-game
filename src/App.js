import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";
import {Characters} from "./components/Characters/Characters";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="characters" element={<Characters/>}/>
                <Route path="bio/:id" element={<Biography/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
    );
}

export default App;
