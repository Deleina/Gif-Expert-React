import React, { useState } from 'react';
import PropTypes from 'prop-types'
//recibiendo como argumento {setCategorie}(destructurando el array )
export default function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        inputValue.trim()
        //insertando input value dentro de setCategory
        // callback de  todas las categorias anteriores en el estado actual + inputValue
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        //limpiando input 
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}