import { CONSTANTS } from './constants';

describe('tvolearn spec', () => {

    beforeEach(() => {
        cy.visit(CONSTANTS.LANDING_URL);
        cy.viewport(2000, 2000);            
        cy.contains('button', 'Elementary (K - 8)').click();
        cy.contains('a', 'Grade 1').click();
    })

    it('Resources for Learning exists', () => {     
        cy.contains('a', 'Science & Technology').click();     
        cy.get('.shogun-heading-component').contains('h2', 'Resources for Learning').scrollIntoView();
        cy.get('.shogun-heading-component h2').should('contain', 'Resources for Learning');
        cy.get('#resources').should('have.length',1);

        cy.get('ul#resources > li').contains('a', 'Finding Stuff Out with Zoey | Migration')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_FINDING_STUFF)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Canada Crew | Weather')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_CANADA_CREW)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Gabby\'s Farm')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_GABBYS_FARM)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Power Hour of Learning | What\'s your season?')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_POWER_HOUR)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Finding Stuff Out With Zoey | Extreme Cold')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_EXTREME_COLD)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'ScienceXplosion | The Buzz on Bugs')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_SCIENCE_EXPLOSION)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'The Space | New Canadian Food Guide')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_CANADIAN_FOOD)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Me and My Body | Stomach')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_BODY_STOMACH)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Space Kids | The Sun')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_SUN)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Now You Know | Electricity')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_ELECTRICITY)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Food')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_CANADIAN_FOOD)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');

        cy.get('ul#resources > li').contains('a', 'Power Hour of Learning | Shadows, Science & Symmetry!')
            .should('have.attr', 'href', CONSTANTS.RESOURCE_SHADOWS_SCIENCE)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noopener');
    });   

})