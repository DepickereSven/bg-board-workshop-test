describe('store-ui-shared', () => {
  beforeEach(() => cy.visit(
    '/iframe.html?id=headercomponent--primary&args=title:BoardGameHoard;'
  ));
  it('should render the component', () => {
    cy.get('bg-board-header').should('exist');
  });


  it('should show the title', () => {
    cy.get('bg-board-header').contains('BoardGameHoard');
  });
});
