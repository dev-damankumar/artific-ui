import React from 'react'
import {render} from '@testing-library/react'
import Divider from './Divider'

describe('Render Divider', () => {
    test('render the Divider component', () => {
        const {container} = render(<Divider/>)
        expect(container.firstChild).toHaveClass('divider')
    })
    test('render the divider default/horizontal direction', () => {
        const {container} = render(<Divider/>)
        expect(container.firstChild).not.toHaveClass('divider-vertical')
    })
    test('render the divider vertical direction', () => {
        const {container} = render(<Divider direction="vertical"/>)
        expect(container.firstChild).toHaveClass('divider-vertical')
    })
})
