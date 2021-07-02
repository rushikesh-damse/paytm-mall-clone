import React , {useEffect, useState} from 'react'
import {Link , useParams} from 'react-router-dom'
import CategoryProducts from './CategoryProducts'
import {Products} from './Products'
import '../../Styles/CategoryProducts.css';

function Category() {
    let {id} = useParams();
 
 const filteredPost = Products.filter(product => id === product.category);
    return (
       
       <div className ="category">
        <CategoryProducts product = {filteredPost} id= {id}/>
       </div>
    
    )
}

export default Category
