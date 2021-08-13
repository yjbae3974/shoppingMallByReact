import React,{useState, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Product from './data.js';
import styled from 'styled-components';
import './detail.scss';
import {재고context} from './App';
import {Nav} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';

let 박스 = styled.div`
  padding:30px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상}
`

function Detail(props){
  let [disabled,setDisabled]= useState(0);
  let [input값,setInput값] = useState('');
  let [누른탭,누른탭변경] = useState(0);
  let [스위치,스위치변경] = useState(false);
  let 재고 = useContext(재고context);
    useEffect(()=>{//Detail컴포너트가 업데이트 될 때마다 얘 실행, 아니면 시작할 때 실행.
      let 타이머 = setTimeout(()=>{
        setDisabled(1);
      },2000);
      return function 어쩌구(){
        clearTimeout(타이머);
        //실행할 코드. 이 컴포넌트가 사라질 때 이 코드 실행.
      }
    },[disabled]);  //대괄호는 실행조건. 여기선 disabled가 변경될 때만 실행. 대괄호 안에 아무것도 없으면 처음 detail실행될 때만 켜지고 이후 업데이트 되든 말든 실행 안함.
    useEffect(()=>{
      //이렇게 useEffect많이 써도 됨. 단 순서는 위에서부터 아래로
      return function 어쩌구(){
        //실행할 코드. 이 컴포넌트가 사라질 때 이 코드 실행.
      }
    });  


    let {id} = useParams(); //중괄호 내부: 파라미터 모든 값들이 id로 저장됨./:id뒤에 입력한 값.
    let history = useHistory();
    let idNum = Product;
    let 찾은상품 = props.shoes.find(function(상품){
      return 상품.id == id;
    })
    console.log(찾은상품);
    return(
      <div className="container">
       <박스>
        <제목 className="red">Detail</제목>
       </박스>
       <input onChange={(e)=>{setInput값(e.target.value)}} />
       <div>
         {input값}
       </div>
       {
         disabled === 0
         ? 
          <div className={"my-alert2"+" " +disabled}>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
         : null
       }
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5 pb-2" style={{fontSize:25}}>{찾은상품.title}</h4>
            <p className="p-1">{찾은상품.content}</p>
            <p className="p-1">{찾은상품.price}</p>

            <Info 재고={props.재고}></Info>
            <button className="btn btn-danger me-1" onClick={()=>{
              let stock = props.재고;
              stock[0]--;
              props.재고변경([...stock]);
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> {/*history.push('/')이러면 push내부 경로로 감.*/}
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{누른탭변경(0);스위치변경(false)}}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{누른탭변경(1);스위치변경(false)}}>Option 2</Nav.Link>
          </Nav.Item>
        </Nav>
        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/ >
        </CSSTransition>
  </div>
    )
  }

  

  function Info(props){
    return(
      <p className="p-1">재고: {props.재고[0]}</p>
    )
  }

function TabContent(props){
  useEffect(()=>{
    props.스위치변경(true);
  })
    if(props.누른탭 === 0){
      return <div className="mt-5">0번째 내용입니다.</div>
    } else if(props.누른탭 === 1){
      return <div className="mt-5">1번째 내용입니다.</div>
    } else if(props.누른탭 === 2){
      return <div className="mt-5">2번째 내용입니다.</div>
    }
      
  }
  export default Detail;