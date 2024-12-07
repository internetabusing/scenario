describe('Тестирование производительности', () => {
    it('Производительность загрузки страницы', () => {
      const startTime = performance.now();
  
      cy.visit('https://flowers-18.ru/')
  
      cy.window().then((win) => {
        const loadTime = performance.now() - startTime; 
        cy.log(loadTime); 
        expect(loadTime).to.be.lessThan(2000); 
      });
    });
  
    it('Измерить время ответа на вызов API', () => {
      const apiStartTime = performance.now(); 
  
      cy.request('GET', 'https://flowers-18.ru/catalog/podarki/?bxrand=1733049397244')
        .then((response) => {
          const apiLoadTime = performance.now() - apiStartTime;
          cy.log(apiLoadTime); 
          expect(apiLoadTime).to.be.lessThan(500); 
          expect(response.status).to.eq(200); 
        });
    });
  });