import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

function Shop() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h2>Buy items</h2>
      {/* <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMonye(100))}}>-</button>
      Add item to cart
      <button className="btn btn-primary" onClick={()=> {dispatch(actionCreators.depositMonye(100))}}>+</button> */}
      <button className="btn btn-primary" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
      Add item to cart
      <button className="btn btn-primary" onClick={()=> {actions.depositMoney(100)}}>+</button>
    </div>
  );
}

export default Shop;
