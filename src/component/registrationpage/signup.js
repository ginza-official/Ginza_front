//eslint-disable
import React, {useState} from 'react';
import logo from "../homepage/icons/g.png";
import '../homepage/style.css'
import './style.css'
import '../main.css'
import {Link, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";


function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
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
        // console.log('Username:', username);
        // console.log('Email:', email);
        // console.log('Password:', password);


         fetch('http://127.0.0.1:8000/register/',{
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                name: username,
                email: email,
                password: password
            })
        })
            .then(response => {
                if (response.ok) {
                    navigate('/');
                    alert("login succesfull!!!")
                    localStorage.setItem('username', username);
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);

                    return response.json();
                } else {
                    throw new Error('Registration failed.');

                }
            })


            // .then(data => {
            //     // Store the token in local storage or a cookie
            //     console.log(data.access);
            //     localStorage.setItem('access_token', data.access);
            //     setToken(data.access);
            //     console.log(jwt_decode(data.access));
            //     navigate('/');
            //     alert("login succesfull!!!")
            // })


        // Reset form fields
        setUsername('');
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
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                placeholder={'Username'}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Email</label>
                            <input
                                type="email"
                                id="gmail"
                                value={email}
                                placeholder={'ex: ginza@gmail.com'}
                                onChange={(event) => setEmail(event.target.value)}
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