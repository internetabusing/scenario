describe('Тестирование навигации', () => {
    it('Проверка ссылок в меню', () => {
      cy.visit('https://flowers-18.ru/');
      cy.get('a').contains('Акции').click();
      cy.url().should('include', '/catalog/aktsii/');
    });
  });