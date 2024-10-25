import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть ваша логика регистрации
        console.log('Регистрация:', { username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
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
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default Register;
