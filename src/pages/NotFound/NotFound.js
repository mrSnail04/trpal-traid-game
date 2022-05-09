import React from "react";
import Heading from "../../components/Heading";
import s from './NotFound.module.scss'


const NotFound = () => {
    return (
        <div className={s.root}>
            <Heading black>404 Not Found</Heading>
        </div>
    );
};

export default NotFound;