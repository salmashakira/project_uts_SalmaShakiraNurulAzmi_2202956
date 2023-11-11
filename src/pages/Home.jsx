import React from 'react';
import '..//Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
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
              <img className="w-100 gambar" src="foto/atas1.jpg" alt="Image" style={{ height: '700px', objectFit: 'cover' }} />
              <div className="jumbotronbesar-judul">
                <div className="kontainer">
                  <div className="baris kolom-rata-tengah">
                    <div className="kolom-besar-8">
                      <h1 className="display-6 text-putih mb-3" style={{ color: '#ffffff' }}>
                        Welcome to My Website Profile
                      </h1>
                      <h5 className="text-putih">Salma Shakira Nurul Azmi</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="kontainer-jarak facts py-5">
      <div className="kontainer py-5">
        <div className="baris g-5">
          <div className="kolom-sedang-12">
            <div className="kartu" style={{ borderRadius: '10px', backgroundColor: '#06bbcc' }}>
              <div className="kartu-body p-4">
                <br />
                <p className="text-putih" style={{ fontSize: '20px' }}>
                  Hello, my name is Salma Shakira Nurul Azmi. I am a 3rd semester student of Computer Science Education study program of Universitas Pendidikan Indonesia. I was born in Bandung, December 18, 2003, I come from Cimahi, West Java. My hobbies are exercising, reading, watching movies, and many more.
                  <br />
                </p>
                <a href="about.html" className="btn tombol-hitam py-sm-2 px-sm-4 px-7 mb-3">Selengkapnya</a>
                <br />
              </div>
            </div>
            <br />
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

export default Home;