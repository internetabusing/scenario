describe('Тест сортировки по цене', () => {
    it('должен сортировать товары по цене (asc/desc)', () => {
        cy.visit('https://www.saucedemo.com/inventory.html'); // Переход на страницу с товарами
        
        cy.get('select[name="sort"]').select('Price: Low to High'); // Выбор сортировки по возрастанию цены
        
        cy.get('.product-price').then($prices => {
            const priceArray = $prices.toArray().map(price => parseFloat(price.innerText.replace('$', ''))); // Извлечение и преобразование цен в массив
            const sortedAsc = [...priceArray].sort((a, b) => a - b); // Сортировка по возрастанию
            expect(priceArray).to.deep.equal(sortedAsc); // Сравнение исходного и отсортированного массивов
        });
        
        cy.get('select[name="sort"]').select('Price: High to Low'); // Выбор сортировки по убыванию цены
        
        cy.get('.product-price').then($prices => {
            const priceArray = $prices.toArray().map(price => parseFloat(price.innerText.replace('$', '')));
            const sortedDesc = [...priceArray].sort((a, b) => b - a); // Сортировка по убыванию
            expect(priceArray).to.deep.equal(sortedDesc); // Сравнение исходного и отсортированного массивов
        });
    });
});
