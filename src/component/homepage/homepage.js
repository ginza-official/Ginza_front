//eslint-disable
//import styles
import './style.css'
//import images
import logo from './icons/g.png'
import ginza2 from './icons/g.png'
import wall from './img/wall.jpg'
import video from './video/kupe.mp4'
// icons ######
import telegram from './icons/telegram.svg'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import twitter from './icons/twitter.svg'
import mail from './icons/envelope-solid.svg'
//import libraries
import Popup from 'reactjs-popup';
import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
//picture cards
import img1 from './img/q.jpg'
import img2 from './img/w.jpg'
import img3 from './img/eve.jpg'
import img4 from './img/pxfuel.jpg'
import img5 from './img/p.jpg'
import img6 from './img/22.png'
import img7 from './img/11.png'
import img8 from './img/b2.jpg'
import jwt_decode from "jwt-decode";
import user_icon from './icons/user.png'
// import { useNavigate } from 'react-router-dom';













function Homepage() {
    const baseURL = "http://127.0.0.1:8000/api/courses/";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // user  qismi
    // const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            const decodedToken = jwt_decode(token);
            setUser(decodedToken.username);
        } else {
            setUser(null);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setUser(null);
        // navigate('/');

    };


// user qismi tugadi
    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const videoRef = useRef(null);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (<div>
            {/*eslint-disable*/}
            <div className="Nav">
                <div className="navbar">
                    <Link to="/">
                        <div className="logo">
                            <img src={ginza2} alt="logo"/>
                            <h1>Ginza</h1>
                        </div>
                    </Link>
                    <div className="nav-items">
                        <ul>
                            <li><a className={'active'} href={"#main"}>Bosh sahifa</a></li>
                            <li><a href={"#about"}>Biz haqimizda</a></li>
                            <li><a href={"#kurslar"}>Kurslar</a></li>
                            <li><a href={"#contact"}>Kontakt</a></li>

                            {user ? (
                                    <>
                                        <li><a>
                                            <ul className={'user-logo-list'}>
                                                <li><img className="user-logo" src={user_icon} alt="logo"/></li>
                                                <li>{user}</li>
                                            </ul>


                                        </a>
                                        </li>
                                        <li><Link className={'logout_button'}  onClick={handleLogout}>Logout</Link></li>
                                    </>

                                    ) : (
                                <>
                                    <li><Link className={'login_button'} to="/login">Login</Link></li>
                                    <li><Link className={'login_button'} to="/signup">Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div id={'main'} className="main">
                <div className="main-content">
                    <div className={'main-cointainer'}>
                        <img className={'main-img'} src={wall} alt="img"/>
                    </div>
                </div>
            </div>
            <div className="subscriber">
                <div className="subscriber-content">
                    <div className={'subs-text'}>
                        <div className={'sub'}>
                            <h2 className={'subs-text-h2'}>Endi masofa muhim emas!</h2>
                        </div>
                        <div className={'sub'}>
                            <h1>500+</h1>
                            <p>Jami tahsil olayotgan o’quvchilarimiz</p>
                        </div>
                    </div>
                    <div className={'subs-text-half'}>
                        <div className={'sub'}>
                            <h1>100+</h1>
                            <p>Platformamizda mavjud kurslar soni</p>
                        </div>
                        <div className={'sub'}>
                            <h1>20+</h1>
                            <p>Uzoq yillik tajribaga ega ustozlarimiz</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="courses">
                <div className="courses-content">
                    <div className={'cards'}>
                        <div className={'card img1 imgs'}>
                            <h2>Tezkor kurslar</h2>
                        </div>
                        <div className={'card img2 imgs'}>
                            <h2>Praktikum kurslar</h2>
                        </div>
                        <div className={'card img3 imgs'}>
                            <h2>Chuqurlashtirilgan kurslar</h2>
                        </div>
                        <div className={'card img4 imgs'}>
                            <h2 className={'btn-4'}>Maxsus praktikum kurslar</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id={'about'} className="about">
                <div className="about-content">
                    <div className={'about-text'}>
                        <p>Ginza jamoasi </p>
                        <h2>Nima uchun Ginza da o'qish kerak? </h2>
                        <button onClick={openPopup}>Videoni ko'rish</button>
                        <div/>
                    </div>
                    <div className={'about-video'}>
                        <video className={'iframe'} src={video}
                               ref={videoRef}
                               controls
                               muted
                        ></video>
                        <Popup open={isPopupOpen} onClose={closePopup}>
                            <div className="popup-iframe">
                                <iframe className={'popup-iframe_iframe'}
                                        src={video}
                                        title={'video'}
                                        allowFullScreen/>
                                <div className={'popup-back-flex'}>
                                    <button onClick={closePopup} className="popup-back">Back</button>
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
            {/*kasblar*/}
            <div id={'jobs'} className={'jobs'}>
                <div className={'jobs-content'}>
                    <div className={'jobs-text'}>
                        <h1>Kasblar</h1>
                        <p>Kasbga yo'nalitirilgan praktikumlar yordamida eng tez va samarali yo'llar bilan
                            mutaxassislar qatoriga qo'shiling. Har bir praktikum soha mutaxassislari tomonidan eng
                            zamoaviy o'quv reja asosida tayyorlangan.</p>
                    </div>
                    <div className={'jobs-type'}>
                        <button>Frontend</button>
                        <button>Backend</button>
                        <button>Fullstack</button>
                        <button>Mobile</button>
                        <button>UI/UX</button>
                        <button>Game</button>
                        <button>DevOps</button>
                        <button>QA</button>
                        <button>Project</button>
                        <button>Marketing</button>
                        <button>Business</button>
                        <button>Other</button>
                    </div>
                    <div className={'jobs-cards'}>
                        <div className={'job-card'} style={{backgroundImage: `url(${img1})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img2})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img3})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img4})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img5})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img6})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img7})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img8})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img6})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                        <div className={'job-card'} style={{backgroundImage: `url(${img5})`}}>
                            <p>Adham Zohirov</p>
                            <h3>FSunʼiy intellekt - NLP (nutq bilan ishlash) - oldindan qabul</h3>
                            <a href={"#jobs"}>Batafsil -></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id={'kurslar'} className={'kurslar'}>
                <h1>Kurslar</h1>
                <div className={'kurslar-type'}>
                    <button>Bepul kurslar</button>
                    <button>Backend</button>
                    <button>Frontend</button>
                    <button>Fullstack</button>
                    <button>Mobile</button>
                </div>
                <div className={'kurslar-cards'}>
                    {items.map((item, index) => (<div key={item.id} className={'kurslar-card'}>
                            <img src={item.image} alt="img"/>
                            <p className={'kurslar-card-p1'}>{item.teacher_name}</p>
                            <p className={'kurslar-card-p2'}>300 o'quvchi</p>
                            <h2>{item.name}</h2>
                            <p className={'kurslar-card-p3'}>{item.description.slice(0, 100)}</p>
                            <p className={'kurslar-card-p4'}>{item.price}</p>
                            <Link key={item.id} id={item.id} to={`/courses/${item.id}`}>
                                <button className={'kurslar-card-button'}>Kirish</button>
                            </Link>
                        </div>))}
                </div>
            </div>
            <div id={'contact'} className={'contact-forms img-background'}>
                <div className={'contact-form'}>
                    <div className={'contact-form-text'}>
                        <div><h1 className={'contact-form-text-h1'}>Kasb tanlashdagi birinchi yordamni beramiz!</h1>
                            <p className={'contact-form-text-p'}>Ma’lumotlaringizni qoldiring va sizga tez fursatda
                                aloqaga chiqamiz</p></div>
                    </div>
                    <div className={'contact-form-input'}>
                        <input type="text" placeholder={'Ismingiz'}/>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                               placeholder={'Telefon raqamingiz'}/>
                        <button>Jo'natish</button>
                        <p>Tugmani bosib, maxfiylik siyosati va foydalanuvchi shartnomasining shartlarini qabul
                            qilgan bo'lasiz</p>
                    </div>
                </div>
            </div>
            <div className={'footer'}>
                <div className={'footer-section'}>
                    <div className={'logo'}>
                        <img src={logo} alt="logo"/>
                        <h1>Ginza</h1>
                    </div>
                    <div className={'number title log'}>+998900046465</div>
                    <div className={'location title log'}>TATU</div>
                </div>
                <div className={'footer-section'}>
                    <a href={'#'} className={'title'}> Platforma</a>
                    <a href={'#'} className={'text-title'}>Kasblar</a>
                    <a href={'#'} className={'text-title'}>Kurslar</a>
                </div>
                <div className={'footer-section'}>
                    <a href={'#'} className={'title'}> Kompaniya</a>
                    <a href={'#'} className={'text-title'}>Biz haqimizda</a>
                    <a href={'#'} className={'text-title'}>Blog</a>
                    <a href={'#'} className={'text-title'}>Ommaviy oferta</a>
                    <a href={'#'} className={'text-title'}>Maxfiylik siyosati</a>
                </div>
                <div className={'footer-section'}>
                    <a href={'#'} className={'title'}>Ma'lumot</a>
                    <a href={'#'} className={'text-title'}>Bog'lanish</a>
                    <a href={'#'} className={'text-title'}>Bo'lib to'lash</a>
                    <a href={'#'} className={'text-title'}>Qanday xarid qilinadi?</a>
                    <a href={'#'} className={'text-title'}>Voucher qo'llanma</a>
                    <a href={'#'} className={'text-title'}>Chegirmalar</a>
                </div>
            </div>
            <div className={'iconss'}>
                <img className={'icon1'} src={facebook} alt="img"/>
                <img className={'icon1'} src={instagram} alt="img"/>
                <img className={'icon1'} src={twitter} alt="img"/>
                <img className={'icon1'} src={mail} alt="img"/>
                <img className={'icon1'} src={telegram} alt="img"/>
            </div>
        </div>);
    }
}
export default Homepage;



