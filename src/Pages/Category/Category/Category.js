import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews=useLoaderData();
  
    return (
        <div>
            <h4>This is Categaory have number of News: {categoryNews.length}</h4>
            {
                categoryNews.map(news=><NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;