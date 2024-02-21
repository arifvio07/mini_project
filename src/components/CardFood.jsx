import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function CardFood({ item }) { 
  return (
    <Card className='m-2'  >
      <img
        alt="Sample"
        src={item.img}
      />
      <CardBody>
        <CardTitle tag="h5">
          {item.name}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Price : ${item.price}
        </CardSubtitle>
        <CardText>
          {item.dsc}
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
  );
}
