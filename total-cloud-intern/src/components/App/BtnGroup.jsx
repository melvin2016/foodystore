import React from 'react';
import './BtnGroup.css';
export default ({addToCart, removeFromCart, availableItemIndex, selectedItemIndex})=>(
    <div className="btnGroup">
        <div className="addTocart p-2">
            <button onClick={addToCart} className={availableItemIndex!==null?'primary-btn':'primary-btn disable'} >{`Add to cart >>`}</button><br/>
        </div>
        <div className="removeFromCart p-2">
            <button onClick={removeFromCart} className={selectedItemIndex!==null?'primary-btn':'primary-btn disable'}>{`<< Remove from cart`}</button>
        </div>
        
        
    </div>
);