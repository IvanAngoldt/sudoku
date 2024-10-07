import React from 'react';

const Overlay = ({ won }) => {
    if (!won) return null;

    const handleNewGame = () => {
        window.location.reload(); // Перезагрузка страницы
    };

    return (
        <div className="overlay">
            <div className="overlay__content">
                <div className="overlay__text">
                    <span className="overlay__textspan1">Поздравляю, </span>
                    <span className="overlay__textspan2">вы победили!</span>
                </div>
                <div
                    className="overlay__text"
                    onClick={handleNewGame}
                    onMouseEnter={(e) => e.target.style.cursor = 'pointer'} // Изменение курсора при наведении
                >
                    <span className="overlay__textspan1">Хотите сыграть </span>
                    <span className="overlay__textspan2">новую игру?</span>
                </div>
            </div>
        </div>
    );
}

export default Overlay;
