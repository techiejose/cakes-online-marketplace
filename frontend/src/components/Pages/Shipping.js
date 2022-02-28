import React, { Component } from 'react'
import './Shipping.css';
import {Link} from 'react-router-dom'
import { DataContext } from '../Context';
import axios from "axios";

import {toast} from 'react-toastify';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export class Shipping extends Component {
    static contextType=DataContext;
    constructor(props) {
        super(props)
      
        this.state = {
            activeItem: {
              names: "",
              town: "",
              mobile: "",
              dateOrdered: this.handledate(),
            },
            order:false,
            notValid:false
        }};
        handleChange = (e) => {
            let { name, value } = e.target;
            const activeItem = { ...this.state.activeItem, [name]: value };
            this.setState({ activeItem });    
          };
    saveData=(e)=>{
        //save the cart info
        e.preventDefault();
        if(this.state.activeItem.mobile.trim().length>0 && this.state.activeItem.names.trim().length>0 && this.state.activeItem.town.trim().length>0){
        const {cart,clearCart}=this.context;
        let cartLen = cart.length;
        for (let i = 0; i < cartLen; i++) {
           const name=cart[i].name;
           const quantity=cart[i].count;
           const total=cart[i].price*quantity;
           const dateOrdered=this.handledate();
           const mobile=this.state.activeItem.mobile;
           let formfield= new FormData()
     formfield.append('product',name)
     formfield.append('quantity',quantity)
     formfield.append('total',total)
     formfield.append('dateordered',dateOrdered)
     formfield.append('mobile',mobile)
     
        axios 
          .post("http://localhost:8000/api/order/",formfield)
          
        }
       clearCart();
//save customer details
let formfield= new FormData()
     formfield.append('names',this.state.activeItem.names)
     formfield.append('mobile',this.state.activeItem.mobile)
     formfield.append('town',this.state.activeItem.town)
     formfield.append('dateordered',this.state.activeItem.dateOrdered)
     console.log(this.state.activeItem.town);
        axios
          .post("http://localhost:8000/api/customer/",formfield)
          window.location.reload();
          this.setState({order:true});
          toast.success('Request sent Succesfully',
          {position: toast.POSITION.TOP_CENTER},{autoClose:10000});
    }
  else{
    this.setState({notValid:true});
  }}
    handledate = () => {
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
      }
    render() {
        return (
            <div className='container'>
            <div className='ship'>
            {this.state.order && <h3 style={{color:'green'}} >Order placed Succesfully</h3>}
           
                <h3>Personal and Shipping Information</h3>
                {this.state.notValid && <h3 style={{color:'red'}}className='errorTitle' >fill all the fields</h3>}
                <form onSubmit={(e)=> this.saveData(e)}>
                <input type='text' name="names" value={this.state.activeItem.names} onChange={this.handleChange} className='inputfield' placeholder='Enter your Names'/>
                <input type='text' name="town" value={this.state.activeItem.town} onChange={this.handleChange} className='inputfield' placeholder='Enter your Town'/>
                <input type='text'name="mobile"value={this.state.activeItem.mobile} onChange={this.handleChange} className='inputfield' placeholder='Enter your Phone Number'/>
                
                <button className='buttonstyle2 'type="submit">Complete</button>
                </form>
                
                <div className='paybtn'>
                <Link to='/cart'><button className='buttonstyle2'>Back to Cart</button></Link>
                </div>
            </div>
            <div className='shipmethod' >
              
            <h3 >Shipping Method</h3>
            <p>Picking from our shops is free of charge but a delivery fee applies for any delivery made depending on your location</p>
            <h3 className='pay'>How To Pay</h3>
            1. Go to Mpesa Buy Goods<br/>

            2. Enter Till Number 5966037<br/>

            3. Enter Amount<br/>

            4. Send<br/>

            <p className='pay'> Please note that your order will be considered once payment has been made.

            You will receive a payment confirmation message from JOSETECH once your payment has been confirmed</p>
            </div>
            </div>
        )
    }
}

export default Shipping
