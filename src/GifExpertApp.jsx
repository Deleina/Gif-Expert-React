import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //primera forma de agregar al array
        //destructuracion: copia del anterior array y agregando un nuevo elemento
        setCategories([newCategory, ...categories])
        //segunda forma de agregar al array 
        //setCategories( cat => [...cat, 'valorant'])
    }


    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>

            {/*
            // se puede mandar cualquier tipo de propiedades como string, booleanos y funciones etc
            // mandando una funcion (como propiedad )a addCategory llamada setCategory que tiene como referencia del valor del useState
            */}
            <AddCategory
                //setCategories= {setCategories}
                //nueva categoria 
                onNewCategory={event => onAddCategory(event)}
            />


            {/*listado de gif */}

            <ol>
                {categories.map(category => (
                    //se crea un nuevo componente por cada  categoria , pero no los anteriores 
                    <GifGrid key={category} 
                    category={category}/>
                ))
                }

            </ol>
            {/*git item */}
        </>
    )
}
