import React from 'react';
import { Card } from 'reactstrap';
import './ApplicationCard.css';

export default ({render})=>{
        return(
            <Card className="ApplicationCard">
                {render ? render() : null}
            </Card> 
        );
 };

