import { CONSTANTS } from './constants';

describe('science and technology page', () => {

    beforeEach(() => {
        cy.visit(CONSTANTS.LANDING_URL);
        cy.viewport(2000, 2000);            
        cy.contains('button', 'Elementary (K - 8)').click();
        cy.contains('a', 'Grade 1').click();
    })

    it('Grade-1 page loading successfully', () => {                    
        cy.url().should('eq', CONSTANTS.GRADE1_URL);
    });        

    it('Science & Technology page loading successfully', () => {                    
        cy.contains('a', 'Science & Technology').click();     
        cy.url().should('eq', CONSTANTS.SCIENCE_TECH_URL);
        cy.get('.shogun-heading-component h1').should('contain', 'Grade 1');
        cy.log(cy.get('.shogun-heading-component').find('h2'));
        cy.get('.shogun-heading-component h2').should('contain', 'Science and Technology');      
    });
    
    it('Learning Activities exist', () => {     
        cy.contains('a', 'Science & Technology').click();     
        cy.get('#strandsTop').contains('h2', 'Learning Activities').scrollIntoView();
        cy.get('#strandsTop h2').should('contain', 'Learning Activities');
    });

    it('Resources for Learning exists', () => {     
        cy.contains('a', 'Science & Technology').click();     
        cy.get('.shogun-heading-component h2').should('contain', 'Resources for Learning');
    });   

    it('Vocabulary exists', () => {     
        cy.contains('a', 'Science & Technology').click();     
        cy.get('.shogun-heading-component').contains('h2', 'Vocabulary').scrollIntoView();
        cy.get('.shogun-heading-component h2').should('contain', 'Vocabulary');
    });  
    
    it('Apply the Learning exists', () => {     
        cy.contains('a', 'Science & Technology').click();     
        cy.get('.shogun-heading-component').contains('h2', 'Apply the Learning').scrollIntoView();
        cy.get('.shogun-heading-component h2').should('contain', 'Apply the Learning');
    });

    it('Looking for a Different subject exists', () => {     
        cy.contains('a', 'Science & Technology').click();     
        cy.get('.shogun-heading-component').contains('h2', 'Looking for a Different Subject?').scrollIntoView();
        cy.get('.shogun-heading-component h2').should('contain', 'Looking for a Different Subject?');
    });
      
    it('Stay Connected exists', () => {
        cy.contains('a', 'Science & Technology').click();     
        cy.get('.signup-inner').contains('h2', 'Stay Connected').scrollIntoView();
        cy.get('.signup-inner h2').should('contain', 'Stay Connected');
        cy.get('.signup-inner form').should('exist');
    });

    it('Social media links exist', () => {
        cy.contains('a', 'Science & Technology').click();     
        cy.get('footer').scrollIntoView()
        cy.get('a').should('contain', 'Instagram');     
        cy.get('a').should('contain', 'Facebook');   
        cy.get('a').should('contain', 'YouTube');   
        cy.get('a').should('contain', 'Twitter');   
    });

    it('Footer accessibility links exist and valid', () => {
        cy.contains('a', 'Science & Technology').click();     
        cy.get('footer').scrollIntoView()
        cy.get('a').should('contain', 'Privacy Notice');
        cy.contains('a', 'Privacy Notice').click();
        cy.url().should('eq', CONSTANTS.PRIVACY_NOTICE_URL);
        cy.go('back');
        cy.get('back').should('contain', 'Terms of Use');
        cy.contains('a', 'Terms of Use').click();
        cy.url().should('eq', CONSTANTS.TERMS_OF_USE_URL);
        cy.go('back');
        cy.get('a').should('contain', 'Accessibility');
        cy.contains('a', 'Accessibility').click();
        cy.url().should('eq', CONSTANTS.ACCESSIBILITY_URL);
        cy.go('back');
        cy.get('a').should('contain', 'FAQ');
        cy.contains('a', 'FAQ').click();
        cy.url().should('eq', CONSTANTS.FAQ_URL);
      });
  })