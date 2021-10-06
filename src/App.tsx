import React from 'react';
import fun from './assets/image.gif'
import happycustomers from './assets/200.gif'
import panda from './assets/panda.gif'
import './App.css';
import {Container, Nav, Navbar, Row, Col, Image, Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">PALO Life</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/journey">Journey</Nav.Link>
              <Nav.Link href="/improve">What's Next</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path='/journey'><Journey/></Route>
        </Switch>
        <Switch>
          <Route path='/home'><Home/></Route>
        </Switch>

      </Router>
  );
}

function Home() {
  return (
      <div style={
        {background: "black"}
      }>
        <Container style={{padding : "100px 0 100px 0"}}>
          <Row>
            <Col xs={7} md={3}>
              <Image src={fun} thumbnail/>
            </Col>
            <Col xs={6} md={4}>
              <Image src={happycustomers} thumbnail/>
            </Col>
            <Col xs={6} md={4}>
              <Image src={panda} thumbnail/>
            </Col>
          </Row>
        </Container>
        <Container style={{paddingBottom : "100px"}}>
          <Row>
            <Col xs={7} md={3}>
              <Card style={{width: '18rem'}}>
                <Card.Body>
                  <Card.Title>Making work as enjoyable for employees</Card.Title>
                  <Card.Text>
                    <p>It's a tough 2 years for almost all of us and PALO makes us feeling belonged
                    with the Honey Fridays and other goodies every month. </p>
                    <p> I personally loved the a intro pack with the a brand new Mac and other things :)</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{width: '18rem'}}>
                <Card.Body>
                  <Card.Title>Happy Clients</Card.Title>
                  <Card.Text>
                    The quality that PALO ensures in its work makes the customers come back for more work
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{width: '18rem'}}>
                <Card.Body>
                  <Card.Title>Share and Care</Card.Title>
                  <Card.Text>
                    <p> The KS sessions, design thinking, technical hive meetings really help us grow personally and also on a technical level.</p>
                     <p> Also gives a chance to bond ourselves in this time</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}



function Journey() {
  return( <div   style={ {background: "black" ,padding : "100px 0 400px 0"}}>
      <Container fluid >
    <Row >
      <Col lg={12}>
        <iframe style={{paddingLeft : "300px"}} allowFullScreen
                height="600px"
                src={"https://www.youtube.com/watch?v=0rnMIueRKNU"}
                width="70%" />
      </Col>
    </Row>
      </Container>
  </div>)
}


export default App;
