import React, {useState} from 'react';

import ApplicationCard from './ApplicationCard';
import BtnGroup from './BtnGroup';
import {Card, CardTitle} from 'reactstrap'

import './Application.css';


import cardimg from '../../img/img1.png';
export default ()=>{
    // State: Available Item 
    // eslint-disable-next-line 
    const [availableItems,setAvailableItems] = useState([
        {
            img: cardimg,
            name: 'Pizza',
            prize: 5.99,
            imgAlt: 'Lorem, ipsum dolor.'
    
        },
        {
            img: cardimg,
            name: 'Burger',
            prize: 2.99,
            imgAlt: 'Lorem, ipsum dolor.'
    
        },
        {
            img: cardimg,
            name: 'Chicken Pasta',
            prize: 4.99,
            imgAlt: 'Lorem, ipsum dolor.'
    
        },
        {
            img: cardimg,
            name: 'Grilled Sandwich',
            prize: 1.99,
            imgAlt: 'Lorem, ipsum dolor.'
    
        }
    ]);
    // State: Selected Item
    const [selectedItems, setSelectedItems] = useState([]);
    // State: Selected Item Index for available items
    const [availableItemIndex,setAvailableItemIndex] = useState(null);
    // State: Selected Item Index for selected items
    const [selectedItemIndex,setSelectedItemIndex] = useState(null);
    // State: Total Prize
    const [sum, setSum] = useState(0);


    // Function: adding to cart
    const addToCart = ()=>{
        if(availableItemIndex !== null && availableItems.length > 0){
            const item = availableItems[availableItemIndex];
            const sItems = [...selectedItems];
            sItems.push(item);
            setSelectedItems(sItems);
            setAvailableItemIndex(null);
        }else{
            alert('Select atleast 1 item to add!');
        }
        
    }

    // Function: removing from cart
    const removeFromCart = ()=>{
        if(selectedItemIndex!==null && selectedItems.length > 0){
            const sItems = [...selectedItems];
            sItems.splice(selectedItemIndex,1);
            setSelectedItems(sItems);
            setSelectedItemIndex(null);
        }else{
            alert('select atleast 1 item to remove!');
            return;
        }

    }
    return(
        <section id="availableSec">
            <div className="container">
                <div id="availableSecContainer" className="row d-flex align-items-center">
                    <div className="col-12 col-md-4">
                        <ApplicationCard
                            render={()=>{
                                if(availableItems.length > 0){
                                    return(
                                        <>
                                            <CardTitle className="card-title">Available options</CardTitle>
                                            {availableItems.map((item,index)=>(
                                                <div key={item.name+item.prize} onClick={setAvailableItemIndex.bind(null,index)} className={index === availableItemIndex ? "item-active card-item d-flex flex-row justify-content-between align-items-center" : "card-item d-flex flex-row justify-content-between align-items-center"}>
                                                    <img className="card-img" src={item.img} alt={item.imgAlt}/>
                                                    <div className="item-name">{item.name}</div>
                                                    <div className="item-prize">$ {item.prize}</div>
                                                </div>
                                            ))}
                                        </>
                                    )
                                }else{
                                    return(
                                        <Card className="ApplicationCard">
                                            <div className="noItems d-flex flex-column justify-content-center align-items-center">
                                                <h2>Woah! You added everything!</h2><br/>
                                                <p>We are pround of you!</p>
                                            </div>
                                        </Card> 
                                    );
                                    
                                }
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <BtnGroup  selectedItemIndex={selectedItemIndex} availableItemIndex={availableItemIndex}  addToCart={addToCart} removeFromCart={removeFromCart}/>
                    </div>
                    <div className="col-12 col-md-4">
                    <ApplicationCard
                            render={()=>{
                                if(selectedItems.length > 0){
                                    let total = 0;
                                    for(let i=0; i<selectedItems.length; i++){
                                        total = total + selectedItems[i].prize;
                                    }
                                    setSum(total)
                                return(
                                    <>
                                        <CardTitle className="card-title">Your Cart</CardTitle>
                                        <div className="card-items">
                                            {selectedItems.map((item,index)=>(
                                                <div key={item.name+item.prize}>
                                                    <div onClick={setSelectedItemIndex.bind(null,index)} className={index === selectedItemIndex ? "item-active card-item d-flex flex-row justify-content-between align-items-center" : "card-item d-flex flex-row justify-content-between align-items-center"}>
                                                        <img className="card-img" src={item.img} alt={item.imgAlt}/>
                                                        <div className="item-name">{item.name}</div>
                                                        <div className="item-prize">$ {item.prize}</div>
                                                    </div>
                                                    <div className="total d-flex justify-content-between align-items-center">
                                                        <p className="total-info align-self-center">Total Amount: </p>
                                                        <p className="total-info align-self-center">$ {parseFloat(sum).toFixed(2)}</p>
                                                    </div>
                                                </div>   
                                            ))}
                                        </div>
                                    </>
                                )
                            }else{
                                return(
                                    <Card className="ApplicationCard">
                                        <div className="noItems d-flex flex-column justify-content-center align-items-center">
                                            <h2>Your cart is empty</h2><br/>
                                            <p>Select an item and click “Add to cart”.</p>
                                        </div>
                                    </Card>
                                );
                            }
                        }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}