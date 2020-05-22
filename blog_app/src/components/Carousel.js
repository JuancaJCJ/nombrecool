import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    
} from 'reactstrap';
import barman from '../images/barman.jpg'
import cocteles from '../images/cocteles.jpg';
import tropicalcoctel from '../images/tropical_coctel.jpg'
const items = [
    {
        src: barman,
        altText: 'Slide 1',
        caption: 'El mejor sitio en donde encontrar recetas para preparar  los mejores cocteles.',
        header: 'Bienvenido a Barman'
    },
    {
        src: cocteles,
        altText: 'Slide 2',
        caption: 'Registrate y accede a todas las recetas para preparar todo tipo de cocteles con tus licores favoritos.',
        header: 'Prueba todas nuestras recetas de cocteles'
    },
    {
        src: tropicalcoctel,
        altText: 'Slide 3',
        caption: 'Si tienes alguna receta que le encanta a todos amigos y familiares, compartela con el mundo, solo necesitas ingresar y listo.',
        header: 'Comparte tus recetas con todo el mundo'
    }
];

const Carousell = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const styl = {
        image: {
            margin: 15,
            width: 1200,
            height: 500,
            border: '5px solid pink',
            borderRadius: 10
        },
        font:{
            size:5
        }
    };
    const slides = items.map((item) => {
        return (
            
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                
            >
                    <img src={item.src}  style={styl.image} className="rounded mx-auto d-block img-thumbnail" className="img-fluid" alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
            
        );
    });

    return (
        <Carousel id="boton"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carousell;
