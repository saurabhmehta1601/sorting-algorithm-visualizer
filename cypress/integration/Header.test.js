/// <reference types="cypress" />
import {HOME_PAGE_TITLE} from "../../src/constants/HomePage"

describe('Header',() => {
   beforeEach(() => {
    cy.visit('/')
   }) 

    it(`shows logo text as ${HOME_PAGE_TITLE}`,() => {
        cy.getByTestId('logo').contains(HOME_PAGE_TITLE)
    })
    it('contains controls for changing bar count and width', () => {
        cy.getByTestId('controls').find('label').contains('Adjust Bars').should('have.length', 1)
    })
})