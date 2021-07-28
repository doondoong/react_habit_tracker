import React, { memo } from 'react';

const Add = memo((props) => {
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = "";
    };
    return (
        <form className="add-from" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Habit"
                className="add-input"
            />
            <button className="add-button">Add</button>
        </form>
    );
})

export default Add;
