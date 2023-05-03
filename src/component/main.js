//eslint-disable
import React  from "react";
import Homepage from "./homepage/homepage";
import './main.css'

// function AUTH_CONTEXT() {
//     const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//
//     url_refresh_token = 'http://localhost:8000/auth/token/refresh/';
//     url_token = 'http://localhost:8000/auth/token/';
//     const token = localStorage.getItem('access_token');

function Main() {
    return (
        <div className={'main'}>
            {/*eslint-disable*/}
            <Homepage/>
        </div>
    )
}

export default Main;



