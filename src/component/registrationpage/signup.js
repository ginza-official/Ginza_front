//eslint-disable
import React, {useState} from 'react';
import logo from "../homepage/icons/g.png";
import '../homepage/style.css'
import './style.css'
import '../main.css'
import {Link, useNavigate} from "react-router-dom";

const RegistrationUrl = 'http://localhost:8000/register/'


function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); //
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation
        if (username.trim() === '') {
            alert('Iltimos, toʻliq ismingizni kiriting');
            return;
        }

        if (email.trim() === '') {
            alert('Iltimos, pochtangizni  kiriting');
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

        fetch(RegistrationUrl, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                username: username,
                email: email,
                phone: phone,
                password: password
            })
        })
            .then(response => {
                if (response.ok) {
                    navigate('/login');
                    alert("login succesfull!!!")
                    return response.json();
                } else {
                    throw new Error('Registration failed.');

                }
            })
        setUsername('');
        setPassword('');
        setRetypePassword('');
    };

    return (<div className={'login'}>
            {/*eslint-disable*/}
            <div className="registration-page">
                <div className="Nav">
                    <div className="navbar">
                        <Link to="/">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                                <h1>Ginza</h1>
                            </div>
                        </Link>
                        <div className="nav-items">
                            <ul>
                                <li><Link className={'login_button'} to="/login">Login</Link></li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className={'login-form'}>
                    <h1 style={{color: 'black'}}>Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">username</label>
                            <input
                                type="username"
                                id="username"
                                value={username}
                                placeholder={'Username'}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                id="gmail"
                                value={email}
                                placeholder={'ex: ginza@gmail.com'}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input
                                type="phone"
                                id="phone"
                                value={phone}
                                placeholder={'ex: +998900046465'}
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
                        <button className={'login-button'} type="submit">Register</button>
                    </form>
                </div>
            </div>

        </div>


    );
}

export default RegistrationPage;