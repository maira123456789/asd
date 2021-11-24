import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({item, deleteProduct, getProductToEdit}) => {
  // ! приняли пропсы, отобразили данные из пропсов
    return (
        <Card className="m-2" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.model}</Card.Title>
    <Card.Text>{item.price}</Card.Text>
    <Button variant="danger" className="m-1" onClick={()=>deleteProduct(item.id)}>Delete</Button>
    <Button onClick={()=> getProductToEdit(item)} variant="success" className="m-1">Edit</Button>
  </Card.Body>
</Card>
    );
};

export default ProductCard;