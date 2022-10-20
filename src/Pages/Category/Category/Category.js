import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const loadData=useLoaderData();
  
    return (
        <div>
            <h4>This is Categaory have number of News: {loadData.length}</h4>
        </div>
    );
};

export default Category;