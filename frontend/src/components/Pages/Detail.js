import React, { Component } from 'react'
import axios from 'axios';
import './Detail.css'
import { DataContext } from '../Context';

export class Detail extends Component {
    state={
        product:"",
        newslug:""
    };
    static contextType=DataContext;
    componentDidMount(){
        const slug=this.props.match.params.id;
        const fetchdata=async()=>{
        const newslug=slug.substr(0,slug.indexOf("-"));
        this.setState({newslug:newslug});
        console.log(newslug);
        let data ;
  
        axios.get(`/api/product/${newslug}`)
        .then(res => {
            data = res.data;
            this.setState({product:data});
        })
        .catch(err => {})
        };
        
        fetchdata();
        
    }
    render() {
        return (
            <div className='detail'>
            <img src={this.state.product.photo1} height="250"width="100%"className='productimg'></img> 
            <div className='box'>
             <div className='row'>
                 <h2>{this.state.product.name}</h2>
                 <span className='pricecolor'>Ksh{this.state.product.price}</span>
             </div>
             <p>{this.state.product.description}</p>
             <button className='centerbutton'onClick={()=>this.context.addTocart(this.state.product.id)}>Add to Cart</button>
            </div>
         </div>
        )
    }
}

export default Detail
