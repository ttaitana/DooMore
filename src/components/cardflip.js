import React, { Component } from "react";
import back1 from '../assets/card_set/back1.png'
import front1 from '../assets/card_set/front1.png'
import back2 from '../assets/card_set/back2.png'
import front2 from '../assets/card_set/front2.png'
import back3 from '../assets/card_set/back3.png'
import front3 from '../assets/card_set/front3.png'

export default class CardFlip extends Component{
    constructor(){
        super()
        this.state = {
            back_card : [back1, back2, back3],
            front_card : [front1, front2, front3]
        }
    }
    render(){
        const {
            match: { params }
          } = this.props;
          const { card_id } = params;
        return(
        <div>
            <p>Card id is {card_id}</p>
            <img src={this.state.back_card[card_id-1]} alt=""/>
            <img src={this.state.front_card[card_id-1]} alt=""/>
        </div>
        )
    }
}