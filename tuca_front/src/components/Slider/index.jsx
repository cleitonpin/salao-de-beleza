import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import slides from './slides';
import './styles.css';

export default function Slider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > slides.length - 1) {
                index = 0;
            }
            return index;
        })
    }

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = slides.length - 1;
            }
            return index;
        });
    }

    useEffect(() => {
        const lastIndex = slides.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index]);

    return (
        <section className='section' id='promotions' style={{ marginTop: 30 }}>
            <div className='title'>
                <h2>
                    <span>/</span>Promoções
                </h2>
            </div>
            <div className='section-center'>
                {slides.map((slide, slideIndex) => {
                    const { id, image } = slide;

                    let position = 'nextSlide';
                    if (slideIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        slideIndex === index - 1 ||
                        (index === 0 && slideIndex === slides.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt='promotion' className='promotion-img' />
                        </article>
                    );
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
}
