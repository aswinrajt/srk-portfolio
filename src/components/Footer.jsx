import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-4'>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Shah Rukh Khan</h5>
            <p>
              Shah Rukh Khan, also known as the "King of Bollywood," is a globally acclaimed actor, producer, and entrepreneur. With numerous awards and accolades, he continues to inspire millions with his work in the film industry.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href='#' className='text-light'>Home</a></li>
              <li><a href='#' className='text-light'>About</a></li>
              <li><a href='#' className='text-light'>Films</a></li>
              <li><a href='#' className='text-light'>Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Shah Rukh Khan</h5>
            <div className='d-flex'>
              <a href='https://www.facebook.com/IamSRK' target='_blank' rel='noopener noreferrer' className='text-light me-3'>
                <FaFacebookF />
              </a>
              <a href='https://twitter.com/iamsrk' target='_blank' rel='noopener noreferrer' className='text-light me-3'>
                <FaTwitter />
              </a>
              <a href='https://www.instagram.com/iamsrk/' target='_blank' rel='noopener noreferrer' className='text-light me-3'>
                <FaInstagram />
              </a>
              <a href='https://www.youtube.com/user/iamsrk' target='_blank' rel='noopener noreferrer' className='text-light'>
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <Row className='pt-3 border-top'>
          <Col className='text-center'>
            <p className='mb-0'>&copy; {new Date().getFullYear()} Shah Rukh Khan. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
