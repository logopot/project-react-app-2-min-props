import React from 'react';
import {Card} from '../Card/Card';
import './Cards.css';

const Cards = (props) => {



    const rendercards = () => (
        props.data.map((item, i) => {
            return (
                <Card item = {item} key = {i} removeCard = {props.removeCard}/>
            )
        })
    )

    return (
        <div className = "cards">
            <div className = "wrapper">
                {rendercards()}
            </div>
        </div>
    )

}

export {Cards};