import logo from './logo.svg';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import React,{useState, useContext, lazy, Suspense} from 'react';
// import Detail from './Detail'
import Product from './data.js'
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './Cart';
let Detail = lazy(()=>import('./Detail'));

export let  재고context = React.createContext();

function App() {
  let [shoes,shoes변경]=useState(Product);//중괄호 안써도 되네
  let [img주소,img주소변경]=useState([
    'https://codingapple1.github.io/shop/shoes1.jpg',
  'https://codingapple1.github.io/shop/shoes2.jpg',
  'https://codingapple1.github.io/shop/shoes3.jpg']);
  let [btnCount,setBtnCount] = useState(2);
  let [재고,재고변경]= useState([10,11,12,10,10,10]);
  let variable = 1;
  return (
    <div className="App" style={{minHeight: '120vh', paddingBottom: 30}}>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">BYJ's shoppingMall</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as ={Link} to="/">Home</Nav.Link>
        <Nav.Link as = {Link} to ="/detail/0">Detail</Nav.Link>
        <Nav.Link as = {Link} to ="/cart">Cart</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>{/*스위치는 아래 것들중 여러개가 맞아도 하나만 보여주세요 라는 뜻*/}
<Route exact path="/">{/*여기는 메인페이지 */}
<div className="container-fluid text-center background-image d-flex justify-content-center">
  <div className="d-flex flex-column justify-content-center">
  <div style={{fontSize: 50,fontWeight: 500,color:'coral'}}>20% Season Off</div>
  <div className="text-white">여름을 맞아 바겐세일을 진행합니다:)</div>
  </div>
</div>
<div className="container">

  <재고context.Provider value={재고}>
    {/* //값 공유를 원하는 html들을 감싸고 value={공유원하는 값} */}
  <div className="row">
    {
      shoes.map((신발,index)=>{
        return (
          <상품 shoes={신발} img주소={img주소[index]} index={index}></상품>
        )
      })

      
    }
  </div>
  </재고context.Provider>
  
  <button className="btn btn-primary mt-3" onClick={()=>{
    //성공하면 then, 실패하면 catch
    let tmp = btnCount;
    tmp++;
    setBtnCount(tmp);

    axios.post('서버URL',{id:'codingapple',pw:1234});

    axios.get('https://codingapple1.github.io/shop/data'+btnCount+'.json')
    .then((result)=>{
      //axios는 json을 object로 자동으로 바꿔줌.
        shoes변경([...shoes,...result.data]);//...는 대괄호를 벗겨줌.
        console.log(btnCount);
    })
    .catch(()=>{
      console.log('실패했어요');
    })
  }}>더보기</button>
</div>
</Route>
<Route path="/detail/:id">
  <재고context.Provider value={재고}>
    <Suspense fallback={<div>로딩중</div>}>
      <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
    </Suspense>
  </재고context.Provider>
</Route>
<Route path="/cart">
  <Cart></Cart>
</Route>
<Route path="/:id">           {/*모든 문자라는 경로를 의미*/}
  <div>아무거나 적었을 때 이거 보여주셈</div>
</Route>               
{/* <Route path="/어쩌구" component={상품}></Route> */}
</Switch>


    </div>
  );
}
function 상품(props){

  let history = useHistory();

  return (
    <div className="col-md-4" onClick={()=>{history.push('/detail/'+props.shoes.id)}}>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.index+1)+'.jpg'} width="100%" alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
      <Test index={props.index}></Test>
    </div>
  )
}

function Test(props){
  let 재고 = useContext(재고context)
  return (
    <p> stock: {재고[props.index]}</p>
  )
}

export default App;
