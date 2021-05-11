import React from 'react';
import { render } from '@testing-library/react'
import { expect } from '@jest/globals';
import {Cards} from './Cards'

describe('Test de Front', () => {

    let afg = {id:1, name: 'Afghanistan',flag:"https://restcountries.eu/data/afg.svg", continent: 'Asia',}
    test('Debe mostrar Afghanistan en el componente', () => {
        const { getByText } = render(<Cards e={afg}/>)
        expect(getByText('Afghanistan')).toBeInTheDocument();
    })

    let c = {id:3, name: 'Albania',flag:"https://restcountries.eu/data/alb.svg", continent: 'Europe',}
    test('Debe mostrar Albania en el componente', () => {
        const { getByText } = render(<Cards e={c}/>)
        expect(getByText("Albania")).toBeInTheDocument();
    })

    let d = {id:3, name: 'Albania',flag:"https://restcountries.eu/data/alb.svg", continent: 'Europe',}
    test('No debe mostrar informacion que no se este renderizando', () => {
        const { queryByText } = render(<Cards e={d}/>)
        expect(queryByText("Argentina")).not.toBeInTheDocument();
    })
}) 