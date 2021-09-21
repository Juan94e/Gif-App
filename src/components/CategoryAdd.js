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
            <form onSubmit={ handleSubmit }>
                <Input
                    type="text"
                    value={ inputValue }
                    color="primary"
                    placeholder="Search"
                    onChange={ handleInputChange }
                />
            </form>

            <hr  />
        </div>
    );
}
