import React, { Component } from 'react'
import { DataContext } from '../Context';
import './Cart.css'
import deleteIcon from '../svg/trash-solid.svg'
import {Link} from 'react-router-dom'
export class Cart extends Component {
    static contextType=DataContext;
    componentDidMount(){
        this.context.getTotal();
      
    }
    render() {
        const {cart,increment,decrement,removeProduct,total}=this.context;
        if(cart.length===0){
           return <h3 style={{textAlign:"center"}}>No Items in the Cart</h3>
        }
        return (
            <div>
                    
                    {cart.map((detail, id) =>  (
                <div key={id} className='parentborder cart' >
                     <div className='detail'>
            <img src={detail.photo1} height="20"width="15" className='product'></img> 
            <div className='box'>
             <div className='row1'>
                 <h2>{detail.name}</h2>
                 <span className='pricecolor'>Ksh{detail.price* detail.count}</span>
             </div>
             <p>{}</p>
             <div className='amount'>
                 <button className='count' onClick={()=>decrement(detail.id)}>-</button>
                    <span>{detail.count}</span>
                 <button className='count' onClick={()=>increment(detail.id)}>+</button>
             </div>
            </div>
            <div className='delete'onClick={()=>removeProduct(detail.id)}><img src={deleteIcon} width='12'/></div>
         </div>

                </div>
                )
            )}
            <div className='total'>
                <h3>Total:Ksh {total}</h3>
            </div>
            <div className='cartbuttons'>
            <Link to='/shipping'> <button className='buttonstyle'>Check Out</button></Link>
            <Link to='/'> <button className='buttonstyle'>Back to Shopping</button></Link>
            </div>
                    </div>
        )
    }
}

export default Cart
