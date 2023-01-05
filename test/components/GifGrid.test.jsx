
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en el componente <GifGrid>', () => { 

    const category = 'One Punch';

    test('should first', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render(<GifGrid category={category}/> );
        screen.debug()

        expect(screen.getAllByText('cargando....'))
        expect(screen.getAllByText(category))

     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGrid', () => { 
        
        const gifs =[
        {
            id: 'ABC',
            title:'Saitama',
            url:'https://localhost/saitama.jpj'
        },
        {
            id: '123',
            title:'Goku',
            url:'https://localhost/goku.jpj'
        },
    
    ]
        
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        });
        screen.debug()

        render(<GifGrid category={category}/> );
        expect(screen.getAllByRole('img').length).toBe(2)
      })
 });