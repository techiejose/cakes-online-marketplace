import React, { Component } from 'react'
import menu from '../svg/bars-solid.svg'
import {Link} from 'react-router-dom'
import close from '../svg/times-solid.svg'
import cartImg from '../svg/cart-plus-solid.svg'
import searchIcon from '../svg/search-solid.svg'
import './Header.css'
import { DataContext } from '../Context';
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import axios from 'axios'

export class Header1 extends Component {
    static contextType=DataContext;
    state={
        toggle:false,
        search:'',
        detail:[]
    }
    menuToggle=()=>{
        this.setState({toggle:!this.state.toggle});
        console.log(this.state.toggle);
    }
    searchName=(e)=>{
        const {setSearchName,setSearch,setNoDataFalse,checkSearch}=this.context;
        e.preventDefault();
        if(this.state.search.trim().length>0){
      
        setSearchName(this.state.search);
        setSearch();
        setNoDataFalse();
        //check if search returns any data
        let detail ;
  
        axios.get("/api/product/")
        .then(res => {
            detail = res.data;
            this.setState({
                detail : detail 
            });
        
        })
        //check if search returned data

        this.props.history.push("/") ;
     
        }
        
        
    }
    //check if search returned any data
    checkSearch=()=>{
        const {setNoDataFalse,setNoDataTrue,searchName}=this.context;
        if(this.state.detail){
        const result=this.state.detail.filter(detail => detail.name.toUpperCase().includes(searchName.toUpperCase()))
        if(result.length==0){
           setNoDataTrue();
       
        }
        else{
            setNoDataFalse();
         }
        
    }
    }
    componentDidUpdate(prevProps, prevState){
        //check if search has results
        const {checkSearch}=this.context;
        if (prevState.detail !== this.state.detail) {
            this.checkSearch();
           }
          
        }
changeSearch=(e)=>{
    this.setState({search:e.target.value});
}
    render() {
        const tongle=this.state;
        const {cart,items}=this.context;
        console.log(this.state.detail);
        return (
            <header>
                
                <div className='logo'>
               <Link to='/'> <h1>CAKESOKO</h1></Link>
                </div>
                <nav>
                <form class="example" >
  <input type="text" placeholder="What are you looking for.." name="search"value={this.state.search} onChange={this.changeSearch}/>
 <div onClick={this.searchName}> <button type="button" className='iconcolor'><img  src={searchIcon}  width='15'/></button></div>
</form>
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

export default withRouter (Header1)
