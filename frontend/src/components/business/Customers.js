import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import CustomerItem from '../shop/CustomerItem'
export class Customers extends Component {
    constructor(){
        super();
        this.state = { items: [] };

    }
    getCustomers = () => {
        let cookies = new Cookies();
        let user = cookies.get('username');
        console.log(user + 'jajaj');
        axios.get(`http://localhost:5000/api/getCustomers?username=${user}`)
        .then(response =>{
          console.log(response.data)
          this.setState({items : response.data});
        })
      };

    componentDidMount() {
        this.getCustomers();
      }
    
    
    render() {
        const listItems = this.state.items.map(item=>{
            return <CustomerItem key={item.idpurchases}
            item_img={item.item_img}
            name={item.name}
            stock={item.stock}
            cost={item.cost}
            quantity={item.quantity}
            description={item.description}
            manufacturer={item.manufacturer}
            productId={item.productId}
            type = {'purchases'}
            checkout= {this.checkout}
            message={this.state.message}
            username={item.username}
      />  
          });
          return (
            <div className='cart-page'>
                      {listItems}
      
            </div>
          )
    }
}

export default Customers
