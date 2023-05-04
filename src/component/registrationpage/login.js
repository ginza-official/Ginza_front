//eslint-disable
import logo from "../homepage/icons/g.png";
import '../homepage/style.css'
import './style.css'
import '../main.css'
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [token, setToken] = React.useState("");

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Email:', email);
        // console.log('Password:', password);
        fetch('http://localhost:8000/token/', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({

                email: email,
                password: password

            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication failed.');

                }
            })
            .then(data => {
                // Store the token in local storage or a cookie
                console.log(data.access);
                localStorage.setItem('access_token', data.access);
                setToken(data.access);
                console.log(jwt_decode(data.access));
                navigate('/');
                alert("login succesfull!!!")
            })

            .catch(error => {
                setError(error.message);
                console.log('catch error', error.message);
                alert('Authentication failed!');
                // Try to refresh the token if an error occurs
                if (error.message === 'Authentication failed.') {
                    fetch('http://localhost:8000/auth/token/refresh/', {
                        method: 'POST', headers: {
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify({
                            refresh: localStorage.getItem('refresh_token')
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Token refresh failed.');
                            }
                        })
                        .then(data => {
                            // Store the new access token in local storage
                            localStorage.setItem('access_token', data.access);
                            setToken(data.access);
                        })
                        .catch(error => {
                            setError(error.message);
                        });
                }
            });


    }

    return (<div className={'login'}>      {/*eslint-disable*/}
            <div className="login-page">
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
                                <li><Link className={'login_button'} to="/signup">Register</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={'login-form'}>
                    <h1 style={{color: 'black'}}>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input type="email" id="email"
                                   placeholder={'Enter your username or email or phone'}
                                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder={'password'} id="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className={'login-button'} type="submit">Login</button>
                    </form>
                </div>
            </div>

        </div>

    );
}

export default LoginPage;
