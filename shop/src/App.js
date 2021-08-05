import logo from './logo.svg';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import React,{useState} from 'react';
import Product from './data.js'

function App() {
  let [shoes,shoes변경]=useState(Product);//중괄호 안써도 되네
  let [img주소,img주소변경]=useState([
    'https://codingapple1.github.io/shop/shoes1.jpg',
  'https://codingapple1.github.io/shop/shoes2.jpg',
  'https://codingapple1.github.io/shop/shoes3.jpg']);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">BYJ's shoppingMall</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="container-fluid text-center background-image d-flex justify-content-center">
  <div className="d-flex flex-column justify-content-center">
  <div style={{fontSize: 50,fontWeight: 500,color:'coral'}}>20% Season Off</div>
  <div className="text-white">여름을 맞아 바겐세일을 진행합니다:)</div>
  </div>
</div>
<div className="container">
  <div className="row">
    {
      shoes.map((신발,index)=>{
        return (
          <상품 shoes={신발} img주소={img주소[index]} indexs={index}></상품>
        )
      })

      
    }
  </div>
</div>
    </div>
  );
}
function 상품(props){
  return (
    <div className="col-md-4">
      <img src={props.img주소} width="100%" alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
