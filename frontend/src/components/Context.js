import React, {Component} from 'react';
import axios from 'axios';
import { Alert } from 'bootstrap';


export const DataContext= React.createContext();

export class DataProvider extends Component{
state={
products:[],
cart: [],
total:0,
items:0,
search:false,
searchName:'',
noData:false,
detail:[]
}
addTocart=(id)=>{
    const {cart}= this.state;
    const check=cart.every(item=>{
        return item.id !== id
    }
    )
    if(check){
    let data ;
  
        axios.get(`/api/product/${id}`)
        .then(res => {
            data = res.data;
            this.setState({cart:[...this.state.cart,data]});
            this.getItems();
    console.log(this.state.items);
        })
        .catch(err => {})
        console.log('hello jose');}else{
            alert('Item already added to Cart');
        }
    
}
increment=id=>{
const {cart}= this.state;
cart.forEach(item=>{
    if(item.id===id){
        item.count+=1;
    }
})
this.setState({cart:cart});
this.getTotal();
this.getItems();
}
decrement=id=>{
    const {cart}= this.state;
    cart.forEach(item=>{
        if(item.id===id){
           item.count===1?item.count=1: item.count-=1;
        }
    })
    this.setState({cart:cart});
    this.getTotal();
    this.getItems();
}
removeProduct=id=>{
    if(window.confirm('Do you want to remove this Product?')){
        const {cart}= this.state;
        cart.forEach((item,index)=>{
            if(item.id===id){
               cart.splice(index,1)
            }
        })
        this.setState({cart:cart});
    }
    this.getTotal();
    this.getItems();
}
getTotal=()=>{
const {cart}=this.state;
const res=cart.reduce((prev,item)=>{
    return prev +(item.price*item.count);
},0)
this.setState({total:res})
}
setSearch=()=>{
    
    this.setState({search:true});
}
setNoDataTrue=()=>{
    this.setState({noData:true});
}

setNoDataFalse=()=>{
    this.setState({noData:false});
}
setDetail=(detail)=>{
    this.setState({detail:detail});
}
clearCart=()=>{
     this.setState({cart:[]});
    this.setState({items:0});
}
setSearchName=name=>{
    this.setState({searchName:name});
}
getItems=()=>{
    const {cart}=this.state;
    const res=cart.reduce((prev,item)=>{
        return prev +item.count;
    },0)
    this.setState({items:res})
    }
componentDidUpdate(){
    localStorage.setItem('dataCart',JSON.stringify(this.state.cart));
    localStorage.setItem('dataTotal',JSON.stringify(this.state.total));
    localStorage.setItem('dataItems',JSON.stringify(this.state.items));
}
componentDidMount(){
    const dataCart=JSON.parse(localStorage.getItem('dataCart'))
    if(dataCart!==null){
        this.setState({cart:dataCart})
    }
    const dataTotal=JSON.parse(localStorage.getItem('dataTotal'))
    if(dataTotal!==null){
        this.setState({total:dataTotal})
    }
    const dataItems=JSON.parse(localStorage.getItem('dataItems'))
    if(dataItems!==null){
        this.setState({items:dataItems})
    }
}
render(){
    const {products,cart,total,items,search,searchName,noData}=this.state;
    const {addTocart, increment,decrement,removeProduct,getTotal,getItems,setSearch,setSearchName,
        clearCart,setNoDataFalse,setNoDataTrue,checkSearch,checkSear}=this;
    return(
        <DataContext.Provider value={ {addTocart,cart,products,increment,decrement,
        removeProduct,total,getTotal,getItems,items,search,setSearch,searchName,setSearchName,
        clearCart,setNoDataFalse,setNoDataTrue,setNoDataFalse,noData,checkSearch}}>
            {this.props.children}
        </DataContext.Provider>
    )
}

}