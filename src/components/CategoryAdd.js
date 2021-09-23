import React, { useState } from 'react'

export const CategoryAdd = ( {setCategories }) => {
   
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue( e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){
            setCategories( (categs) => [inputValue, ...categs  ] );
            setInputValue('');
        } 
    }

    return (
        <div>
            <form className="d-flex" onSubmit={ handleSubmit }>
                <input
                    className="form-control me-2 input-focus"
                    type="search"
                    value={ inputValue }
                    placeholder="Search Gif"
                    aria-label="Search"
                    onChange={ handleInputChange }
                />
            </form>
        </div>
    );
}
