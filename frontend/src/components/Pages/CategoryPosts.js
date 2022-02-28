import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class CategoryPosts extends Component {
    reLoadPage=()=>{
       
        window.location.reload();
    }
  render() {
      
    return (
      <div >
           <h3 className='headline'>CATEGORIES</h3>
                  <h4 className='categoryelement'onClick={this.reLoadPage} ><Link to='/category/Biscuit-Cake' >Biscuit Cake</Link></h4>
                    <h4 className='categoryelement'onClick={this.reLoadPage}><Link to='/category/pound-cake' >Pound Cake</Link></h4>
                    <h4 className='categoryelement'onClick={this.reLoadPage}><Link to='/category/sponge-cake' >Sponge Cake</Link></h4>
                    <h4 className='categoryelement'onClick={this.reLoadPage}><Link to='/category/genoise-cake' >Genoise Cake</Link></h4>
                    <h4 className='categoryelement'onClick={this.reLoadPage}><Link to='/category/angel-cake' >Angel Cake</Link></h4>
                    <h4 className='categoryelement'onClick={this.reLoadPage}><Link to='/category/Butter-Cake' >Butter Cake</Link></h4>
      </div>
    )
  }
}

export default CategoryPosts