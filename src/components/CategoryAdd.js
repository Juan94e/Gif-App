import React, { useState } from 'react'
import Input from '@mui/material/Input';
// import { ThemeProvider } from '@material-ui/core/styles';
// import customTheme from '../styles/customTheme';

export const CategoryAdd = ( {setCategories, theme }) => {
   
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
                    className="form-control me-2"
                    type="search"
                    value={ inputValue }
                    placeholder="Search Gif"
                    aria-label="Search"
                    onChange={ handleInputChange }
                />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        </div>
    );
}
