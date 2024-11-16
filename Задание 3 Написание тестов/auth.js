describe('Тест авторизации', () => {
    it('должен заполнить форму логина и авторизоваться', () => {
        cy.visit('/login'); // Переход на страницу логина
        
        cy.get('input[name="username"]').type('yourUsername'); // Заполнение поля имени пользователя
        cy.get('input[name="password"]').type('yourPassword'); // Заполнение поля пароля
        
        cy.get('button[type="submit"]').click(); // Нажатие на кнопку отправки формы
        
        cy.url().should('include', '/dashboard'); // Проверка, что перенаправило на страницу дашборда
        cy.contains('Welcome'); // Проверка наличия приветственного сообщения
    });
});
