//eslint-disable
import React, {useEffect, useState} from "react";
//import styles
import './style.css'
import '../main.css'
import '../homepage/style.css'
//import icons
import logo from "../homepage/icons/g.png";
import facebook from "../homepage/icons/facebook.svg";
import instagram from "../homepage/icons/instagram.svg";
import twitter from "../homepage/icons/twitter.svg";
import mail from "../homepage/icons/envelope-solid.svg";
import telegram from "../homepage/icons/telegram.svg";
//import libraries
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Popup from "reactjs-popup";

function CourseSinglePage() {
    const [course, setCourse] = useState({});
    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    const baseURLcourse = `http://127.0.0.1:8000/api/courses/${id}`;
    useEffect(() => {
        const fetchData = async () => {
            const courseResponse = await axios.get(baseURLcourse);
            setCourse(courseResponse.data);
            const videosResponse = await axios.get(`http://127.0.0.1:8000/api/courses/${id}/videos/`);
            setVideos(videosResponse.data);
        };
        fetchData();
    }, [id, baseURLcourse]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [buffer, setBuffer] = useState('')
    const openPopup = (link) => {
        setBuffer(link)
        setIsPopupOpen(true);
        console.log(buffer)
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className={'courses-single'}>
            {/*eslint-disable*/}
            <div className="course_single">
                <div className="Nav">
                    <div className="navbar2">
                        <Link to="/">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                                <h1>Ginza</h1>
                            </div>
                        </Link>
                        <div className="nav-items">
                            <ul>
                                <li><Link className={'login_button'} to="/login">Login</Link></li>
                                <li><Link className={'login_button'} to="/signup">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'single-course-section'}>
                    <div className={'main-left'}>
                        <img className={'course-img'} src={course.image} alt={course.title}/>
                        <div className={'course2-cards'}>
                            {videos.map((video) => (
                                <div key={video.id} className={'course2-card'}>
                                    <h4>{video.title}</h4>
                                    <div className={'course2-card-right'}>
                                        <button className={'btn-play-video1'}
                                                onClick={() => openPopup(video.link)}>Videonikorish
                                        </button>
                                    </div>
                                    <Popup open={isPopupOpen} onClose={closePopup}>
                                        <div className="popup-iframe">
                                            <iframe  className={'popup-iframe_iframe'}
                                                    src={`http://www.youtube.com/embed/${buffer}`}
                                                     id={"player"}
                                                     title={"YouTube video player"}
                                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                     allowFullScreen></iframe>
                                            <div className={'popup-back-flex'}>

                                                <button onClick={closePopup} className="popup-back">Back</button>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={'main-right'}>
                        <div className={'course-description'}>
                            <table id="customers">
                                <thead>
                                <tr>
                                    <th>Kurs haqida</th>
                                    <th>Ma'lumot</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Nomi</td>
                                    <td>{course.name}</td>

                                </tr>
                                <tr>
                                    <td>O'qituvchi</td>
                                    <td>{course.teacher_name}</td>
                                </tr>
                                <tr>
                                    <td>videolar soni</td>
                                    <td>{course.video_count} ta video</td>
                                </tr>
                                <tr>
                                    <td>kurs turi</td>
                                    <td>{course.type}</td>
                                </tr>
                                <tr>
                                    <td>kurs narxi</td>
                                    <td>{course.price}</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>{course.description}
                            </p>
                            <button className={'button-course'}>Kursni boshlash</button>
                        </div>
                    </div>
                </div>
                <div className={'footer'}>
                    <div className='footer-section'>
                        <div className={'logo'}>
                            <img src={logo} alt="logo"/>
                            <h1>Ginza</h1>
                        </div>
                        <div className={'number title log'}>+998900046465</div>
                        <div className={'location title log'}>TATU</div>
                    </div>
                    <div className='footer-section'>
                        {/*eslint-disable*/}
                        <a className='title' href="#"> Platforma</a>
                        <a className='text-title'>Kasblar</a>
                        <a className='text-title'>Kurslar</a>
                    </div>
                    <div className='footer-section'>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className='title'> Kompaniya</a>
                        <a className={'text-title'}>Biz haqimizda</a>
                        <a className={'text-title'}>Blog</a>
                        <a className={'text-title'}>Ommaviy oferta</a>
                        <a className={'text-title'}>Maxfiylik siyosati</a>
                    </div>
                    <div className={'footer-section'}>
                        <a className={'title'}>Ma'lumot</a>
                        <a className={'text-title'}>Bog'lanish</a>
                        <a className={'text-title'}>Bo'lib to'lash</a>
                        <a className={'text-title'}>Qanday xarid qilinadi?</a>
                        <a className={'text-title'}>Voucher qo'llanma</a>
                        <a className={'text-title'}>Chegirmalar</a>
                    </div>
                </div>
                <div className={'iconss'}>
                    <img className={'icon1'} src={facebook} alt="img"/>
                    <img className={'icon1'} src={instagram} alt="img"/>
                    <img className={'icon1'} src={twitter} alt="img"/>
                    <img className={'icon1'} src={mail} alt="img"/>
                    <img className={'icon1'} src={telegram} alt="img"/>
                </div>
            </div>
        </div>
    )
}
export default CourseSinglePage






