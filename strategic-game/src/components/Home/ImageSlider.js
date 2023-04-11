import React, { useState, useEffect, } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import axios from 'axios';
import './ImageSliderCSS.css';
/*
const SliderData = [
    { image: "http://localhost:3000/images/news1-img.jpg" },
    { image: "http://localhost:3000/images/news2-img.jpeg" },
    { image: "http://localhost:3000/images/news3-img.jpg" },
    { image: "http://localhost:3000/images/news4-img.jpg" }
];
*/

const ImageSlider = () => {

    // Fetches the news DB data
    const [news, setGames] = useState([]);  //news DB array stored in 'news' variable
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/news');
            setGames(result.data);
        };
        fetchData();
    }, []);

    const [current, setCurrent] = useState(0);
    const length = news.length; // 'news' array variable length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

   

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

            {news.map((slide, index) => {
                // If news DB record contains 'News Content Image'
                if (slide.content_img) {
                    return (
                        <div class="slider-container"
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {/* The slider image background */}
                            {index === current && (
                                <img src={slide.newsimg} alt='News Blog Image' className='image' />
                            )}
                            {/* The news content image to be displayed */}
                            <div class="img_centered" key={slide.slug}>
                                <img class="news_content_img" src={slide.content_img} alt='News Content Image' />
                            </div>
                            {/* The news content description to be displayed */}
                            <div class="text_centered" key={slide.slug}>{slide.newsdesc}</div>
                        </div>
                    );
                }
                {/* If news DB record doesn't contains 'News Content Image' */}
                return (
                    <div class="slider-container"
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {/* The slider image background */}
                        {index === current && (
                            <img src={slide.newsimg} alt='News Blog Image' className='image' />
                        )}
                        {/* The news content description to be displayed */}
                        <div class="centered" key={slide.slug}>{slide.newsdesc}</div>

                    </div>
                );
            })}

        </section>
    );
};

export default ImageSlider;