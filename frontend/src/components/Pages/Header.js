import React, { Component } from 'react'
import menu from '../svg/bars-solid.svg'
import {Link} from 'react-router-dom'
import close from '../svg/times-solid.svg'
import cartImg from '../svg/cart-plus-solid.svg'
import './Header.css'
import { DataContext } from '../Context';


export class Header extends Component {
    static contextType=DataContext;
    state={
        toggle:false
    }
    menuToggle=()=>{
        this.setState({toggle:!this.state.toggle});
        console.log(this.state.toggle);
    }
    render() {
        const tongle=this.state;
        const {cart,items}=this.context;
        return (
            <header>
                <div className='menu' onClick={this.menuToggle}>
                    <img src={menu} width='20'/>
                </div>
                <div className='logo'>
                <h1>CAKESOKO</h1>
                </div>
                <nav>
                    <ul className={this.state.toggle?"tongle":""}>
                        <li><Link to='/'>PRODUCTS</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/contact'>CONTACT US</Link></li>
                        <li className='close' onClick={this.menuToggle}><img src={close} width='20'/> </li>
                    </ul>
                    <div className='nav-cart'>
                    <span>{items}</span>
                    <Link to='/cart'>
                    <img src={cartImg} width='20'/>
                    </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
