import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './MeetUs.css';

const CardSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.slider-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  const handleViewMoreClick = (profile) => {
    window.location.href = `/profiles/${profile}.html`;
  };

  return (
    <div className="slider-container swiper">
      <div className="slider-content">
        <div className="card-wrapper swiper-wrapper">
          {[
            { name: 'Akshaya Priya', profile: 'profile1', description: 'Acted as a Full-Stack Developer and UI designer.', image: './images/profile1.jpg' },
            { name: 'Swathy', profile: 'profile2', description: 'Acted as a Front-End Developer and Designer.', image: './images/profile2.jpg' },
            { name: 'Sangeetha', profile: 'profile3', description: 'Acted as a Back-End Developer and API Connection Establisher.', image: './images/profile3.jpg' },
          ].map((person, index) => (
            <div className="card swiper-slide" key={index}>
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={person.image} className="card-img" alt={person.name} />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">{person.name}</h2>
                <p className="description">{person.description}</p>
                <button className="button" onClick={() => handleViewMoreClick(person.profile)}>View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CardSlider;
