import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {
    const [categories, setCategories] = useState(['Samaurai X']);
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>
        <ol>
        {
            categories.map((category, index) => ( 
                <GifGrid key={index+category} category={category}/>
            ))
        }
        </ol>
        </>
    );
}

export default GifExpertApp