//your JS code here. If required.
describe('Modal Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open modal when button is clicked', () => {
    cy.get('#openModal').click();
    cy.get('#modal').should('have.class', 'open');
  });

  it('should close modal when close button is clicked', () => {
    cy.get('#openModal').click();
    cy.get('.close-modal').click();
    cy.get('#modal').should('not.have.class', 'open');
  });

  it('should close modal when clicking outside of modal', () => {
    cy.get('#openModal').click();
    cy.get('body').click('topRight'); // Click outside the modal area
    cy.get('#modal').should('not.have.class', 'open');
  });
});
