import React from 'react';

const deleteEvent = ({ id, title, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="event">
            <span>Title: {title}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default deleteEvent;