
import React, { Component } from 'react'

export default class List extends Component {
    render() {
            const arr=[10,20,30,40];
            const newArr = arr.map( (num)=>
            {
            return <li key={num}>{num*2}</li>
            }) ;
            
        return <ul>{newArr}</ul>
            }
}