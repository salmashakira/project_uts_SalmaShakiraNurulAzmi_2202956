import React from 'react';
import '..//Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavigationBar from '../components/NavigationBar';
const Contact = () => {
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
                                                    Contact
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
            <div className="kontainer-jarak facts my-5 py-5" style={{ backgroundColor: '#f4f6f3' }}>
                <div className="kontainer py-5">
                    <div className="baris g-5">
                        <div className="kolom-sedang-6 text-tengahh">
                            <center>
                                <b className="btn btn-outline-dark btn-lg" style={{ borderRadius: '500px' }}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                </b>
                                <br />
                                <br />
                                <h4 className="text-hitam">Telepon</h4>
                                <span className="fw-semi-bold text-hitam">0838 6967 2820</span>
                            </center>
                        </div>
                        <div className="kolom-sedang-6 text-tengah">
                            <center>
                                <b className="btn btn-outline-dark btn-lg" style={{ borderRadius: '500px' }}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                </b>
                                <br />
                                <br />
                                <h4 className="text-hitam">Email</h4>
                                <span className="fw-semi-bold text-hitam">salmashakira12@gmail.com</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
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

export default Contact;