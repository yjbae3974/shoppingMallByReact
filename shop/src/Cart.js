import React from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

//Redux 쓰는 이유: props쓰기 싫어서. props없이 모든 컴포넌트가 state를 갖다 쓰기 가능.

function Cart(props){
    let state1 = useSelector((state)=>state.reducer);
    let state2 = useSelector((state)=>state.reducer2);
    let dispatch = useDispatch();

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
                        state1.map((states,i)=>{
                            let id = state1[i].id
                            return(
                                <tr>
                                    <td>{states.id+1}</td>
                                    <td>{state1[i].name}</td>
                                    <td>{states.quan}</td>
                                    <td>{state1[i].price}</td>
                                    <td><button onClick={()=>{dispatch({type: '수량증가',데이터: states.id})}}>+</button><button onClick={()=>{dispatch({type: '수량감소'})}}>-</button></td>
                                    <td><button onClick={()=>{dispatch({type: '항목추가',데이터: states.id, payload: {id: 1, name:'brian',quan:1,price: 300000}})}}>항목추가</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                state2 === true
                ?(
                    <div className="my-alert2">
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button onClick={()=>{dispatch({type: 'false'})}}>닫기</button>
                    </div>
                )
                :null
            }
            
            </div>
            
        </div>
    )
}

// function state를props화(state){
//     console.log(state);
//     return{
//         state: state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }
// export default connect(state를props화)(Cart)

export default Cart;