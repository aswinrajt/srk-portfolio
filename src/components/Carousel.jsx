import React from 'react';
import { Carousel } from 'react-bootstrap';

const films = [
  {
    title: 'Dilwale Dulhania Le Jayenge',
    year: 1995,
    poster: 'https://path-to-your-poster-image.com/ddlj.jpg',
    description: 'A classic love story that became one of the most successful films in Bollywood history.'
  },
  {
    title: 'My Name Is Khan',
    year: 2010,
    poster: 'https://path-to-your-poster-image.com/mnik.jpg',
    description: 'A heartwarming tale of a man with Asperger\'s syndrome who embarks on a journey to meet the President of the United States.'
  },
  {
    title: 'Chennai Express',
    year: 2013,
    poster: 'https://path-to-your-poster-image.com/chennaiexpress.jpg',
    description: 'A thrilling and comedic adventure that takes place on a train ride across India.'
  },
  // Add more films here
];

const FilmographyCarousel = () => {
  return (
    <Carousel>
      {films.map((film, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={film.poster}
            alt={film.title}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{film.title} ({film.year})</h3>
            <p>{film.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FilmographyCarousel;
