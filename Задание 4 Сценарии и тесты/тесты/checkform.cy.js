describe('Тестирование формы обратной связи', () => {
    it('Проверка отправки формы', () => {
      cy.visit('https://flowers-18.ru/kontakty/');
      cy.contains('+7 (922) 517-35-76').should('be.visible');
    });
  });