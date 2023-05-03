//eslint-disable
import React, { useState } from 'react';
import logo from "../homepage/icons/g.png";
import '../homepage/style.css'
import './style.css'
import '../main.css'
import {Link} from "react-router-dom";



function RegistrationPage() {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation
        if (fullName.trim() === '') {
            alert('Iltimos, toʻliq ismingizni kiriting');
            return;
        }

        if (phone.trim() === '') {
            alert('Iltimos, telefon raqamingizni kiriting');
            return;
        }

        if (password.trim() === '') {
            alert('Iltimos, parolingizni kiriting');
            return;
        }

        if (password !== retypePassword) {
            alert("Parollar mos emas ,iltimos qaytadan tekshirib ko'ring");
            return;
        }

        // Submit registration form
        console.log('Full Name:', fullName);
        console.log('Phone Number:', phone);
        console.log('Password:', password);

        // Reset form fields
        setFullName('');
        setPhone('');
        setPassword('');
        setRetypePassword('');
    };

    return (
        <div className={'login'}>
            {/*eslint-disable*/}
            <div className="registration-page">
                <div className="Nav">
                    <div className="navbar">
                        <Link to="/">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                                <h1>Ginza</h1>
                            </div></Link>
                        <div className="nav-items">
                            <ul>
                                <li><Link className={'login_button'} to="/login">Login</Link></li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className={'login-form'}>
                    <h1 style={{color:'black'}}>Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                placeholder={'Full Name'}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                placeholder={'ex: 90 004 64 65'}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                placeholder={'Password'}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input
                                type="password"
                                id="retypePassword"
                                value={retypePassword}
                                placeholder={'retypePassword'}
                                onChange={(event) => setRetypePassword(event.target.value)}
                            />
                        </div>
                        <button  className={'login-button'} type="submit">Register</button>
                    </form>
                </div>
            </div>

        </div>


    );
}
export default RegistrationPage;