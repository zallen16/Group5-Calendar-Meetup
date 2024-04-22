import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_EVENT_MUTATION } from './mutations'; // Import your mutation

const Event = ({ id, title }) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION);

  const handleDelete = async () => {
    try {
      // Optimistically update UI
      // Remove event from UI immediately
      // Assuming you have a delete function to remove the event from the UI
      delete(id);
      
      // Execute mutation
      await deleteEvent({ variables: { eventId: id } });
    } catch (error) {
      // Handle error
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="event">
      <span>Title: {title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Event;