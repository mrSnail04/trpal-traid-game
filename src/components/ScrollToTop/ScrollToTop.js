import {useEffect} from "react";
import {useLocation} from "react-router-dom";


function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
        if (hash) {
            console.log(hash + ' scroll');
            document.getElementById(hash.slice(1)).scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        } else {
            window.scrollTo(0, 0);
        }
    return null;
}

export default ScrollToTop;