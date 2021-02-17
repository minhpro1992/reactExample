import React from 'react'
import HomePageComponent from './HomePageComponent'
import { testRender} from '../test'
describe('<HomePageComponent>', () => {
    it('should render Home Page component', () => {
        testRender(<HomePageComponent/>)
    })
})