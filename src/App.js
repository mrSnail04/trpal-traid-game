import React, { useEffect } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";
import { Characters } from "./pages/Characters/Characters";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Login from "./pages/LoginFormLayout";
import { ContextCharactersProvider } from "./components/ContextCharactersProvider/ContextCharactersProvider";


function App() {

    const {pathname, hash} = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.slice(1))
            const elementRect = element.getBoundingClientRect(); //Возвращает DOMReact объект с размерами
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const position = absoluteElementTop - (window.innerHeight * 0.25);
            window.scrollTo(0, position);
            // element.scrollIntoView({
            //     block: "center",
            //     behavior: "smooth",
            // });

        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <ContextCharactersProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="characters" element={<Characters/>}/>
                    <Route path="characters/:id" element={<Biography/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="about" element={<About/>}/>

                    <Route path="*" element={<NotFound/>} />
                </Route>
                <Route path="login" element={<Login/>} />
            </Routes>
        </ContextCharactersProvider>
    );
}

export default App;
