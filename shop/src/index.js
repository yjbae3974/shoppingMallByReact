import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';



let alert초기값 = true; //이런거는 굳이 redux에 저장할 필요 없음. 그냥 usestate로 만드셈

function reducer2(state = alert초기값, action){
  let copy = state;
  if(action.type ==='false'){
    copy = false;
    return copy;
  }
  else{
    return state;
  }
}


//redux에서 state 만드는 법: 변수로 초기값 만들고 reducer안에 넣기. 그리고 state 수정하는 법도 작성.
let 초기값 = [
  
      { 
        id: 0,
        name: 'Intel-i7',
        quan: 2,
        price: 500000
      },
      { 
        id: 1,
        name: 'Intel-i5',
        quan: 3,
        price: 400000
      },
      { 
        id: 2,
        name: 'Intel i-3',
        quan: 4,
        price: 300000
      }
]

function reducer(state = 초기값,액션){//여기서 수정방법을 정의
  let 카피본 = [...state];

  switch(액션.type){
    case '수량증가':
      카피본[액션.데이터].quan++;
      return 카피본;
    case '수량감소':
      if(카피본[액션.데이터].quan>0){
        카피본[액션.데이터].quan--;
      }
      return 카피본;
    case '항목추가':
      카피본.push(액션.payload);
      return 카피본;
    default:
      return state;

  }

}

let store = createStore((combineReducers({reducer,reducer2})));//100개면 여따가 100개 추가하면 됨.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
