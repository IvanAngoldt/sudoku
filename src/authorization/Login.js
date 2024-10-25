import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть ваша логика авторизации
        // Например, проверка логина и пароля
        onLogin(); // Вызываем, если авторизация успешна
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Вход</h2>
            <div>
                <label>Логин:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Войти</button>
        </form>
    );
}

export default Login;
