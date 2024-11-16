describe('Тест добавления товара в корзину и создания заказа', () => {
    it('должен добавить два товара в корзину и создать заказ', () => {
        cy.visit('https://www.saucedemo.com/inventory.html'); // Переход на страницу с товарами
        
        // Добавление первого товара в корзину
        cy.get('.product').first().find('button.add-to-cart').click(); // Нажатие кнопки добавления товара
        
        // Добавление второго товара в корзину
        cy.get('.product').eq(1).find('button.add-to-cart').click(); // Нажатие кнопки добавления второго товара
        
        cy.visit('/cart'); // Переход на страницу корзины
        cy.get('.cart-item').should('have.length', 2); // Проверка, что в корзине два товара
        
        cy.get('button.checkout').click(); // Нажатие кнопки "Оформить заказ"
        
        // Заполнение формы заказа (можно добавить больше полей по мере необходимости)
        cy.get('input[name="address"]').type('123 Main St');
        cy.get('button[type="submit"]').click(); // Нажатие на кнопку отправки формы заказа
        
        cy.url().should('include', 'https://www.saucedemo.com/cart.html'); // Проверка, что перенаправило на страницу подтверждения заказа
        cy.contains('Thank you for your order!'); // Проверка наличия сообщения о подтверждении заказа
    });
});
