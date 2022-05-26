import React from 'react';

const TodoItem = ({title, completed}) => {
    return (
        <div className="wrap">
            <div className="wrapPole">
                {title}
            </div>
            <input className="todoCheckbox" type="checkbox" checked={completed}/>
        </div>
    );
};

export default TodoItem;