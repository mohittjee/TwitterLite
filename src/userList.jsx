import React, { useState } from 'react';

const UserList = ({ users, onAddUser }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      onAddUser(newUser);
      setNewUser({ name: '', email: '' });
      setShowModal(false);
    }
  };

  return (
    <div>
      
      <div style={styles.addUserContainer}>
      <h2>User List
        <button onClick={() => setShowModal(true)} style={styles.addButton}>Add User</button></h2>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong>: {user.email}
          </li>
        ))}
      </ul>

      {showModal && (
        <div style={styles.modal}>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Name"
            style={styles.input}
          />
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
            style={styles.input}
          />
          <div style={styles.modalButtons}>
            <button onClick={handleAddUser} style={styles.modalButton}>Add</button>
            <button onClick={() => setShowModal(false)} style={styles.modalButton}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  addUserContainer: {
    marginBottom: '20px'
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    float: 'right',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    zIndex: '1000',
    width: '300px'
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginBottom: '10px'
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px'
  },
  modalButton: {
    marginLeft: '10px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default UserList;
