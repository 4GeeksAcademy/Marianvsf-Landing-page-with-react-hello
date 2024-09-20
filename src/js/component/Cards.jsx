import React  from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/*function MyCards1() {
  return (
    <div className="text-center">
        <Card style={{ margin: '10px', padding: '10px', width: '18rem', border: '1px RGB(220, 220, 220)' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s" />
        <Card.Body style={{border: '1px solid RGB(220, 220, 220)'}}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus ducimus illum, est modi!
            </Card.Text>
            <Button variant="primary" className="align-items-center">Find Out More!</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default MyCards1;*/

function MyCards({ imag, title, description}) {
  return (
    <div className="col-md-3 col-sm-6 text-center my-3">
      <Card style={{width: '19rem', border: '1px RGB(220, 220, 220)' }}>
        <Card.Img variant="top" src={imag} />
        <Card.Body style={{border: '1px solid RGB(220, 220, 220)'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="align-items-center">Find Out More!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default MyCards;

/*function MyCardsList() {
  const itemsCards = [
    { imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s',
      title: 'Card Title', description: 'Lorem ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet.' },
    { imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s', 
      title: 'Card Title2', description: 'Lorem2 ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet.' },
    { imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s', 
      title: 'Card Title3', description: 'Lorem3 ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet.' },
    { imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s', 
      title: 'Card Title4', description: 'Lorem4 ipsum adipisicing elit. Rem laudantium, non vitae earum ipsam sint amet.' },
    ];
    
 return (
  <div className="card-container container-fluid">
    <div className="row">
    {itemsCards.map((item) => (
      <div key={item.title} className="col-md-3 col-sm-6 d-flex justify-content-center mb-3 mt-3">
      <Card style={{ 
        width: '19rem', border: '1px RGB(220, 220, 220)' }}>
        <Card.Img variant="top" src={item.imag} />
        <Card.Body style={{border: '1px solid RGB(220, 220, 220)'}}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary" className="align-items-center">Find Out More!</Button>
        </Card.Body>
      </Card>
      </div>
    )
    )
    }
    </div>
  </div>
 );
}
export default MyCardsList;
*/

