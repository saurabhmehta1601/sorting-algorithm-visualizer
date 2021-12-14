import {HOME_PAGE_TITLE} from "../../src/constants/HomePage"
describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it(`should have title ${HOME_PAGE_TITLE}`, () => {
       cy.title().should('eq', HOME_PAGE_TITLE)
    })
})