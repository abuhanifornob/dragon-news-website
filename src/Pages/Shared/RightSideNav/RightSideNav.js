import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {  FaDiscord, FaFacebook, FaGithub, FaGoogle, FaPiedPiperHat, FaTram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
           <ButtonGroup vertical>
      <Button className='mb-2 px-5' variant="outline-primary"><FaGoogle/> Login via Google</Button>
      <Button variant="outline-dark"><FaGithub/> Login via GitHub</Button>
    </ButtonGroup>
    <div className='mt-4'>
        <p>Find Us On</p>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook/> FaceBook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaYoutube/> YouTube</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaWhatsapp/> Whats App</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaDiscord/> Discord</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaPiedPiperHat/> Privacy Policy</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTram/>Terms & Condition</ListGroup.Item>
    </ListGroup>
    </div>
    <div>
        <BrandCarousel></BrandCarousel>
    </div>
    
        </div>
    );
};

export default RightSideNav;