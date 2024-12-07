
describe('Тестирование API', () => {
    it('Проверка ответа API', () => {
      cy.request('GET', 'https://flowers-18.ru/catalog/podarki/?bxrand=1733049397244')
        .its('status').should('equal', 200);
    });
  });