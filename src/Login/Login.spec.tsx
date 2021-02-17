import { testRender } from "../test";
import LoginComponent from "./LoginComponent";
import { screen } from '@testing-library/dom'
import React from "react";

describe('<Login />', () => {
    it('should render Login Page not crashing', () => {
        jest.useFakeTimers()
        testRender(<LoginComponent />)
        setTimeout(() => {
            expect(screen.getByText('Login Page')).toBeTruthy()
        }, 1000);
        jest.runAllTimers()
    })
})