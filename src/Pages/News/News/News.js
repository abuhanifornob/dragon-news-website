import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news=useLoaderData();
    const {category_id,title,total_view,rating,author,details,image_url}=news;
    return (
        <Card>
        <Card.Img variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
          <Card.Text>
            <div>
          
            </div>
        {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary">All News in This Categoryes</Button>
        </Link>
       
        </Card.Body>
      </Card>
    );
};

export default News;