import React  from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Welcome() {
  return (
    <Card style={{marginTop: '90px',
      padding: '10px', 
      marginLeft: '20px',
      marginRight: '47px', 
      background: 'RGB(220, 220, 220)', border: '1px solid RGB(220, 220, 220)' }}>
      <Card.Body>
        <Card.Title><h1>A Warm Welcome!</h1></Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellat, impedit facilis reprehenderit quasi voluptatum illum aperiam numquam rerum consequatur iure culpa delectus, provident quae, cumque exercitationem vitae non labore!
        </Card.Text>
        <Button variant="primary" className="welcomeButton">Call to action!</Button>
      </Card.Body>
    </Card>
  );
}

export default Welcome;