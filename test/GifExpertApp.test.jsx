import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en el componente GifExpertApp', () => {

    const newCategory = 'Saitama';

    test('se debe agregar nueva categorias al array ', () => {

        const {container} = render(<GifExpertApp />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        screen.debug();

        //se dispara eventos para agregar 1 categoria nueva
        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form);
        

        //Espero que se hallan agregado 1 categoría cuyo nombre aparecen en etiquetas h3
        expect(screen.getAllByRole('heading', {level: 1}).length).toBe(1)
    });

    test('no debe agrgar una categoria si ya existe', () => { 

        const {container} = render(<GifExpertApp />);

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form);

        //intento agreagar la misma categoria
        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 1}).length).toBe(1)
     })
});