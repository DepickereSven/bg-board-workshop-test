describe('store-ui-shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary&args=title;'));
  it('should render the component', () => {
    cy.get('bg-board-header').should('exist');
  });
});