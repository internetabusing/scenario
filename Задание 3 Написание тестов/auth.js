describe('Тест авторизации', () => {
    it('должен заполнить форму логина и авторизоваться', () => {
        cy.visit('https://www.saucedemo.com/'); // Переход на страницу логина
        
        cy.get('input[name="username"]').type('standard_user'); // Заполнение поля имени пользователя
        cy.get('input[name="password"]').type('secret_sauce'); // Заполнение поля пароля
        
        cy.get('button[type="submit"]').click(); // Нажатие на кнопку отправки формы
        
        cy.url().should('include', '/dashboard'); // Проверка, что перенаправило на страницу дашборда
        cy.contains('Welcome'); // Проверка наличия приветственного сообщения
    });
});
