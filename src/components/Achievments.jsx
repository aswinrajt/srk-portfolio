import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Timeline.css'; // This is where the custom CSS will go

const achievements = [
  {
    year: '1992',
    title: 'Debut in Bollywood',
    description: 'Shah Rukh Khan made his Bollywood debut with the film "Deewana", which was a commercial success and marked the beginning of his illustrious career.'
  },
  {
    year: '1995',
    title: 'Dilwale Dulhania Le Jayenge',
    description: 'Released in 1995, DDLJ became one of the most successful films in Indian cinema, solidifying Shah Rukh Khan\'s status as the "King of Romance."'
  },
  {
    year: '2002',
    title: 'Padma Shri Award',
    description: 'Shah Rukh Khan was awarded the Padma Shri by the Government of India, recognizing his contributions to the arts and cinema.'
  },
  {
    year: '2013',
    title: 'Chennai Express',
    description: 'Chennai Express broke numerous box office records and became one of the highest-grossing Bollywood films of all time.'
  },
  {
    year: '2021',
    title: 'Over 30 Years in the Industry',
    description: 'Shah Rukh Khan celebrated over 30 years in the film industry, continuing to be a major influence in Indian cinema and beyond.'
  },
  
];

const Timeline = () => {
  return (
    <Container className="timeline">
      {achievements.map((achievement, index) => (
        <Row key={index} className="timeline-item">
          <Col xs={12} md={6} className={index % 2 === 0 ? 'text-right' : 'text-left'}>
            <div className="timeline-content">
              <h3>{achievement.year}</h3>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Timeline;
