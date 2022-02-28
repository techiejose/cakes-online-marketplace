import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Section.css'
import Detail from './Detail'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { DataContext } from '../Context';
import CategoryPosts from './CategoryPosts';

export class Category extends Component {
    state = {
        detail : [],
        category:"",
        noData:false
    }
    static contextType=DataContext;

    componentDidMount() {
        
        const category = this.props.match.params.category;
        const newcategory=category.replace('-', ' ')
        this.setState({
            category : newcategory  
             
        });
        
        let data ;
  
        axios.get("/api/product/")
        .then(res => {
            data = res.data;
            this.setState({
                detail : data  
                 
            });
        })
        .catch(err => {})
        console.log(this.state.category);
       
    }
    render() {
        console.log(this.state.detail.category);
        return (
            
            <div className='grid-container'>
                <div className='grid-child category' >
                    <CategoryPosts/>
                
                </div>
                <div className='product grid-child'>
                    
                { this.state.detail.filter(detail => detail.category && detail.category.toUpperCase() ==this.state.category.toUpperCase()).map(detail => (
            <div className='parentborder' >
                <div className=" grid-item ">
                <img src={detail.photo1} height="200"width="250"></img>
                </div>
                <div className="p-3">
                <Link to={`/product/${detail.id}-${detail.name.replace(/\s+/g, '-')}`} className=" removeunderline placecenter"><h4 >{detail.name}</h4></Link> 
                <p className='placecenter pricecolor'>Ksh {detail.price}.00</p>
               <button className='centerbutton'onClick={()=>this.context.addTocart(detail.id)}>Add to Cart</button>
            </div>
            </div>
            )
        )}

                </div>
            </div>
        )
    }
}

export default Category
