import React from 'react';
import '..//Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavigationBar from '../components/NavigationBar';
const About = () => {
    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                <NavigationBar></NavigationBar>
            </div>
            <div className="kontainer">
                <div className="kontainer-jarak p-0">
                    <div id="header-jumbotronbesar" className="jumbotronbesar slide">
                        <div className="jumbotronbesar-inner">
                            <div className="jumbotronbesar-item active">
                                <img
                                    className="w-100 gambar"
                                    src="foto/bgnav.jpg"
                                    alt="Image"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="jumbotronbesar-judul">
                                    <div className="kontainer">
                                        <div className="baris kolom-rata-tengah">
                                            <div className="kolom-besar-8">
                                                <h1 className="display-6 text-putih mb-3" style={{ color: '#ffffff' }}>
                                                    About
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="kontainer-xxl py-5">
                <div className="kontainer">
                    <div className="baris g-5 jarak-items-akhir">
                    <div className="kolom-sedang-2 horizontal-otomatis">
                            <img
                                className="letak-foto sudut"
                                style={{ height: '175px', objectFit: 'cover' }}
                                width="100%"
                                src="foto/tengah.png"
                                alt="About"
                            />
                        </div>
                        <div className="kolom-sedang-10 horizontal-otomatis">
                            <h2>
                                <b>About</b>
                            </h2>
                            <br />
                            <p className="mb-4">
                                Hello, my name is Salma Shakira Nurul Azmi. I am a 3rd semester student of Computer
                                Science Education study program of Universitas Pendidikan Indonesia. I was born in
                                Bandung, December 18, 2003, I come from Cimahi, West Java. My hobbies are exercising,
                                reading, watching movies, and many more. <br />
                                I chose the Computer Science Education study program because I am interested and have
                                an interest in exploring technological issues. In my opinion, it is important for us
                                to learn technology in this current era. Because technology is always developing and
                                will continue to develop. I also hope that as a student, I can be useful for my
                                surroundings and the environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="kontainer-xxl py-5">
                <div className="kontainer">
                    <div className="baris g-5 jarak-items-akhir">
                        <div className="kolom-sedang-12 horizontal-otomatis" style={{ paddingBottom: '20%' }}>
                            <h2>
                                <b>Biodata</b>
                            </h2>
                            <br />
                            <table border="0" width="100%" style={{ fontSize: '20px' }}>
                                <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td> : Salma Shakira Nurul Azmi</td>
                                    </tr>
                                    <tr>
                                        <td>Place and date of birth</td>
                                        <td> : Bandung, 18 Desember 2003</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td> : 0838 6967 2820</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td> : salmashakira12@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>NIM</td>
                                        <td> : 2202956</td>
                                    </tr>
                                    <tr>
                                        <td>University</td>
                                        <td> : Universitas Pendidikan Indonesia</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="kontainer-jarak text-putihabu footer" style={{ backgroundColor: '#06bbcc' }}>
                <div className="kontainer py-5">
                    <div className="baris mb-5 g-5 mt-3">
                        <div className="kolom-sedang-4">
                            <h4 className="text-putih mb-4">Salma Shakira Nurul Azmi</h4>
                            <div className="lurus pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.instagram.com/salmaakrr_/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="mailto:salmashakira12@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                        <div className="kolom-sedang-4">
                            <h4 className="text-putih mb-4">Contact</h4>
                            0838 6967 2820 <br /> salmashakira12@gmail.com
                        </div>
                    </div>
                    <div className="baris">
                        <div className="kolom-sedang-12 teks-tengah">
                            <br /> ©2023 Salma Shakira Nurul Azmi

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;