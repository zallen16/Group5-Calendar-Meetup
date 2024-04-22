// import React from 'react';
// import { useMutation } from '@apollo/client';
// import { DELETE_EVENT } from '../../utils/mutations'; 

// const removeEvent = ({ id, title }) => {
//   const [deleteEvent] = useMutation(DELETE_EVENT);

//   const handleDelete = async () => {
//     try {
//       delete(id);
      
//       await deleteEvent({ variables: { eventId: id } });
//     } catch (error) {
//       // Handle error
//       console.error('Error deleting event:', error);
//     }
//   };

//   return (
//     <div className="event">
//       <span>Title: {title}</span>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default removeEvent;
