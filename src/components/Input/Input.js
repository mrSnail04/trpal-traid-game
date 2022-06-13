import React from "react";
import cn from 'classnames';
import PropTypes from "prop-types";

import s from "./Input.module.scss";


const Input = ({
    type,
    id,
    required,
    inputLog,
    inputReg,
    title,
    htmlFor,
    name,
    value,
    onChange,

}) => {
    return(
        <>
            <input
                className={
                    cn(
                        {[s.inputLog]: inputLog},
                        {[s.inputReg]: inputReg})
                }
                type={type}
                id={id}
                required={required}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={htmlFor}>{title}</label>
            <div className={s.bar}/>

        </>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    required: PropTypes.string.isRequired,
    inputLog: PropTypes.bool,
    inputReg: PropTypes.bool,
    title: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;