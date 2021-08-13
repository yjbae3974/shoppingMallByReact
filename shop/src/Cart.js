import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

//Redux 쓰는 이유: props쓰기 싫어서. props없이 모든 컴포넌트가 state를 갖다 쓰기 가능.

function Cart(props){
    return(
        <div>
            <div className="container" style={{marginTop:100}}>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>카트</th>
                    <th>이름</th>
                    <th>수량</th>
                    <th>가격</th>
                    <th>변경</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((states,i)=>{
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{props.state[i].name}</td>
                                    <td>{props.state[i].quan}</td>
                                    <td>{props.state[i].price}</td>
                                    <td><button onClick={()=>{props.dispatch({type: '수량증가'})}}>+</button><button onClick={()=>{props.dispatch({type: '수량감소'})}}>-</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                props.alert열렸니 === true
                ?(
                    <div className="my-alert2">
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button onClick={()=>{props.dispatch({type: 'false'})}}>닫기</button>
                    </div>
                )
                :null
            }
            
            </div>
            
        </div>
    )
}

function state를props화(state){
    console.log(state);
    return{
        state: state.reducer,
        alert열렸니 : state.reducer2
    }
}
export default connect(state를props화)(Cart)

//export default Cart;