import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory'

describe('pruebas en <AddaCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        // se crea sujeto de pruebas 
        render(<AddCategory onNewCategory={() => { }} />);

        //extraemos el input 
        const input = screen.getByRole('textbox');

        //disparamos el evento 
        fireEvent.input(input, { target: { value: 'Saitama' } })

        //asercion esperando que suceda despues del evento
        expect(input.value).toBe('Saitama')
        //screen.debug()
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        //TODO:

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        //screen.debug()
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    });

    test('no debe de llamar el OnNewCaregory  si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});