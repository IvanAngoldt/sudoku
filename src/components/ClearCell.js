import React from 'react';

const ClearCell = ({clearCell}) => {
    return (
        <div
            onClick={() => clearCell()}
            style={{ cursor: 'pointer' }}
        >

            Очистить поле
        </div>
    );
}

export default ClearCell;