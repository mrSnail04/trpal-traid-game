import React, {useRef, useState} from "react";
import logo from "./assets/logo.png";
import cn from 'classnames';
import s from "./Login.module.scss";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/Input";


const Login = () => {
    const ref = useRef(null);

    const [isActive, setIsActive] = useState(false);
    const [forms, setForm] = useState({
        loginEmail:"",
        loginPassword:"",
        signUpEmail:"",
        signUpPassword:"",
        signUpRepeatPassword:"",
    });
    const resetForms = () => {
        setForm({
                loginEmail:"",
                loginPassword:"",
                signUpEmail:"",
                signUpPassword:"",
                signUpRepeatPassword:"",
            }
        )
    };
    const handleOpenClick = () => {
        setIsActive(true)
        resetForms();
    };
    const handleCloseClick = () => {
        setIsActive(false)
        resetForms();
    };
    const handleChangeValue =(event) =>{
        setForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (forms.signUpPassword === forms.signUpRepeatPassword){
            console.log('#####:form ',forms)
            resetForms()
        }else {
            console.log('Пароли не совпадают.')
        }
    };

    return(
        <>
            <div className={s.headerLogo}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={cn(s.container, {[s.active]: isActive})}>
                <div className={s.card}/>
                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <form
                        ref={ref}
                        onSubmit={handleFormSubmit}
                    >
                        <div className={s.inputContainer}>
                            <Input
                                inputLog
                                htmlFor='#email'
                                title='Email'
                                type='email'
                                id='#email'
                                required='required'
                                name="loginEmail"
                                value={forms.loginEmail}
                                onChange={handleChangeValue}
                            />
                        </div>
                        <div className={s.inputContainer}>
                            <Input
                                inputLog
                                htmlFor='#password'
                                title='Password'
                                type='password'
                                id='#password'
                                required='required'
                                name="loginPassword"
                                value={forms.loginPassword}
                                onChange={handleChangeValue}
                            />
                        </div>
                        <div className={s.buttonContainer}>
                            <Button  loginButton name="GO"/>
                        </div>
                    </form>
                </div>
                <div className={cn(s.card, s.alt)}>
                    <div className={cn(s.toggle, {[s.active]: isActive})} onClick={handleOpenClick}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                            <path
                                d="m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"/>
                        </svg>
                    </div>
                    <h1 className={s.title}>Register
                        <div className={s.close} onClick={handleCloseClick}/>
                    </h1>
                    <form
                        ref={ref}
                        onSubmit={handleFormSubmit}
                    >
                        <div className={s.inputContainer}>
                            <Input
                                inputReg
                                htmlFor='#email'
                                title='Email'
                                type='email'
                                id='#signup-email'
                                required='required'
                                name="signUpEmail"
                                value={forms.signUpEmail}
                                onChange={handleChangeValue}
                            />
                        </div>
                        <div className={s.inputContainer}>
                            <Input
                                inputReg
                                htmlFor='#password'
                                title='Password'
                                type='password'
                                id='#signup-password'
                                required='required'
                                name="signUpPassword"
                                value={forms.signUpPassword}
                                onChange={handleChangeValue}
                            />
                        </div>
                        <div className={s.inputContainer}>
                            <Input
                                inputReg
                                htmlFor='#passwordRepeat'
                                title='Repeat Password'
                                type='password'
                                id='#signup-repeat-password'
                                required='required'
                                name="signUpRepeatPassword"
                                value={forms.signUpRepeatPassword}
                                onChange={handleChangeValue}
                            />
                        </div>
                        <div className={s.buttonContainer}>
                            <Button registerButton name="REGISTER"/>
                        </div>

                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Login;