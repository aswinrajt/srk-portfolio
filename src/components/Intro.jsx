import React from 'react'
import { Row, Col } from 'react-bootstrap'
import logo from '../../src/assets/wallpaper.jpg'
import srk from '../../src/assets/srk.png'

function Intro() {
  return (
        <>
          <div 
  className='background' 
  style={{ 
    backgroundImage: `url('https://mrwallpaper.com/images/hd/shahrukh-khan-hd-in-white-shirt-xrx60fd79f520t9n.jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: 'black'  
        
  }}

  
>
  <Row className='bg'>
    <Col className='p-5' sm={12} md={6}>
      <h1>Shah Rukh Khan</h1>
      <h5>Actor | Producer | Entrepreneur</h5>
      <p>
        Shah Rukh Khan, often referred to as the "King of Bollywood," is one of the most iconic and influential actors in the history of Indian cinema. With a career spanning over three decades, he has captivated audiences worldwide with his versatile performances, from romantic heroes to complex characters. Beyond acting, Shah Rukh Khan is a successful film producer, co-founding Red Chillies Entertainment, and a savvy entrepreneur, with interests in various industries including sports and technology. Known for his charisma, philanthropy, and global appeal, he continues to be a leading figure in the entertainment industry.
      </p>
    </Col>
    <Col className='p-5' sm={12} md={6}>
      {/* Additional content can go here */}
    </Col>
  </Row>
</div>

        </>
  )
}

export default Intro
