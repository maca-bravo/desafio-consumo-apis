import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const MiApi = ({valorBusqueda}) => {
  const [personajes, setPersonajes] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    
    getData();

  },[]);

  async function getData() {
    const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10");
    const data = await res.json();

    setPersonajes(data);
    setCargado(true);

  };

  return (
    cargado ?
    <Row>
      
        {
          personajes
            .filter((p)=>{
              return p.character.toLowerCase().includes(valorBusqueda.toLowerCase());
            })
            .map((p, i) => {
            return (
            <Col key={i}>
            <Card  style={{ width: '18rem' }}>
             <Card.Img variant="top" src={p.image}/>
            <Card.Body>
              <Card.Title>{p.character}</Card.Title>
              <Card.Text>{p.quote} </Card.Text>
              <Button variant="warning">Go somewhere</Button>
             </Card.Body>
            </Card>
            </Col>
            )
          })
        }
      
    </Row>:
    <h1>Cargando datos</h1>
  )
}

export default MiApi