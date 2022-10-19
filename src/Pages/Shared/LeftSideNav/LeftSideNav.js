import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/news-category")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category=><Link key={category.id} to={`/category/:${category.id}`}><p>{category.name}</p></Link>
                   
                )
            }
        </div>
    );
};

export default LeftSideNav;